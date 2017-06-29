<template>
	<topics-list :topics="topicsList"></topics-list>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import topicsList from '@components/topics-list'

export default {
	name: 'topics',
	components: {
		topicsList
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
		let _tab = this.$route.query.tab ? this.$route.query.tab : 'all'
		this.tabTopics(_tab)
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
			setLoading: 'setLoading'
		}),
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