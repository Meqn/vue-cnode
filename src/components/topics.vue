<template>
	<ul class="mdui-list topic-list">
		<router-link v-for="item in topicsList" :to="{name: 'detail', params: {id: item.id}}" class="mdui-list-item mdui-ripple topic-list-item" tag="li" :key="item.id">
			<div class="mdui-list-item-avatar">
				<img :src="item.author.avatar_url">
			</div>
			<div class="mdui-list-item-content minw0">
				<div class="mdui-list-item-title mdui-text-truncate">
					<span :class="'tag '+topicTab(item.top, item.good, item.tab).className" v-text="topicTab(item.top, item.good, item.tab).text"></span> {{item.title}}
				</div>
				<div class="mdui-list-item-text mdui-list-item-one-line">
					<i class="mdui-icon material-icons mdui-icon-mini mdui-text-color-grey-300">&#xe625;</i>
					<span>{{item.reply_count}}/{{item.visit_count}}</span>
					<div class="mdui-float-right">
						<i class="mdui-icon material-icons mdui-icon-mini mdui-text-color-grey-300">&#xe192;</i>
						<span class="">10分钟前</span>
					</div>
				</div>
			</div>
		</router-link>
		<li is="loading"></li>
	</ul>
</template>

<style lang="scss" scoped>
.topic-list{
	&-item{
		margin-bottom: 5px; background-color: #fff;

		.tag{
			padding: 2px 5px;
			font-size: .75em; color: #fff; vertical-align: middle;
			background-color: #dcdcdc; border-radius: 4px;

			&.top{
				background-color: #E91E63;
			}
			&.good{
				background-color: #2196F3;
			}
			&.ask{
				background-color: #4CAF50;
			}
			&.share{
				background-color: #FFC107;
			}
			&.job{
				background-color: #607D8B;
			}
		}
	}
}
</style>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import loading from '@components/loading'

export default {
	name: 'topics',
	components: {
		loading
	},
	beforeRouteEnter (to, from, next) {
		console.log('beforeRouteEnter', to)
		next(vm => {
			if(to.name === 'topics') {
				window.addEventListener('scroll', vm.getScrollData, false);
			}
		})
	},
	beforeRouteLeave (to, from, next) {
		window.removeEventListener('scroll', this.getScrollData, false);
		next();
	},
	data() {
		return {
			scroll: false, 	// 默认禁止滚动加载，ajax获取一次后才能滚动加载(防止Bug：如果从一个很长的页面进来，会加载两页)
			topicsList: [],
			searchKey: {
				page: 1,
				limit: 20,
				tab: "all",
				mdrender: true
			}
		}
	},
	created() {
		const _route = this.$route,
			_routeName = _route.name;
		// 主题
		if(_routeName === 'topics') {
			let _tab = _route.query.tab ? _route.query.tab : 'all'
			this.tabTopics(_tab)
		}
		// 收藏主题
		if(_routeName === 'favorite') {
			if(this.favoriteTopics.success) {
				this.getFavoriteTopicsSuccess(this.favoriteTopics);
			} else {
				this.getFavoriteTopics(this.username)
			}
		}
	},
	computed: {
		...mapState({
			favoriteTopics: state => state.favorite.topics
		}),
		...mapGetters({
			username: 'getUserName'
		}),
		key() {
			return this.$route.path.replace(/\//g, '_');
		}
	},
	watch: {
		'$route' (to, from) {
			console.log('$route', to);
			if(to.name === 'topics') {
				let _tab = to.query.tab ? to.query.tab : 'all';
				this.tabTopics(_tab)
			}
		}
	},
	methods: {
		...mapActions({
			getFavorite: 'getFavorite',
			setLoading: 'setLoading'
		}),
		topicTab(top, good, tab) {
			let _tab = top ? 'top' : good ? 'good' : tab;
			let _ret = {
				top: {text: '置顶', className: 'top'},
				good: {text: '精华', className: 'good'},
				share: {text: '分享', className: 'share'},
				ask: {text: '问答', className: 'ask'},
				job: {text: '招聘', className: 'job'}
			}
			return _ret[_tab] || {text: '暂无', className: ''}
		},
		// 获取主题
		getTopics(options = {}, success, fail, always) {
			let _params = {...this.searchKey, ...options}
			this.$http.get('/topics', {params: _params}).then(res => {
				if(res.status === 200) {
					let _data = res.data.data;
					if(_data.length === 0) {
						this.loading.show = false;
						this.loading.tipText = this.topicsList.length ? '只收藏这点...' : '暂无数据';
					}
					if(_data.length > 0) {
						this.topicsList.push(..._data)
					}
				}	
				this.scroll = true;
				success && success(_data);
			}).catch(error => {
				this.scroll = true;
				fail && fail(error);
			});
		},
		// 获取收藏
		getFavoriteTopics(username) {
			const context = this;
			context.getFavorite({
				username,
				success(res) {
					context.getFavoriteTopicsSuccess(res)
				},
				fail(res) {
					console.error(res)
					context.setLoading({show: false, tip: '获取数据失败'});
				}
			});
		},
		getFavoriteTopicsSuccess(data) {
			const context = this;
			context.topicsList = data.data;
			context.setLoading({
				show: false,
				tip: context.topicsList.length > 0 ? '就只收藏这点？' : '暂无数据'
			});
		},
		tabTopics(tab) {
			this.searchKey.tab = tab;
			this.topicsList = [];
			this.searchKey.page = 1;
			this.getTopics();
		},
		getScrollData () {
			if(!this.scroll) return;
			let docEl = document.body || document.documentElement;
			let winHeight = window.innerHeight,
				docHeight = Math.max(docEl.clientHeight, docEl.scrollHeight),
				scrollTop = docEl.scrollTop; 	// window.scrollY / pageYOffset
			if(docHeight <= scrollTop + winHeight + 200) {
				this.searchKey.page++;
				this.getTopics();
				this.scroll = false;
			}
		}
	}
}
</script>