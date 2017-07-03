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
			if (vm.getScrollY > 0) {
				window.scrollTo(0, vm.getScrollY)
			}
			window.addEventListener('scroll', vm.getScroll, false);
		})
	},
	beforeRouteLeave (to, from, next) {
		window.removeEventListener('scroll', this.getScroll, false);
		next();
	},
	data() {
		return {
			scroll: true, 	// 默认禁止滚动加载，ajax获取一次后才能滚动加载(防止Bug：如果从一个很长的页面进来，会加载两页)
		}
	},
	computed: {
		...mapGetters({
			searchKey: 'getSearchKey',
			topicsList: 'getTopicsList',
			getScrollY: 'getScrollY'
		})
	},
	watch: {
		'$route' (to, from) {
			let _tab = to.query.tab ? to.query.tab : 'all';
			this.getTopicsList({page: 0, tab: _tab});
		}
	},
	methods: {
		...mapActions({
			setLoading: 'setLoading',
			getTopics: 'getTopics',
			setSeachKey: 'setSeachKey',
			setScrollY: 'setScrollY'
		}),
		getTopicsList(opts = {}) {
			const context = this;
			context.setSeachKey(opts);
			context.getTopics({
				success(res) {
					context.scroll = true;
					context.setLoading({
						show: res.length > 0,
						tip: res.length > 0 ? '我是有底线的' : '暂无数据'
					});
				},
				fail(res) {
					context.scroll = true;
					context.setLoading({show: false, tip: '获取数据失败'});
				}
			});
		},
		getScroll () {
			if(!this.scroll) return;
			let docEl = document.body || document.documentElement;
			/*let winHeight = window.innerHeight,
				scrollTop = docEl.scrollTop; 	// window.scrollY / pageYOffset*/
			let docHeight = Math.max(docEl.clientHeight, docEl.scrollHeight),
					totalHeight = window.innerHeight + window.scrollY
			this.setScrollY(window.scrollY)		// 记录滚动位置，方便返回
			if(docHeight <= totalHeight + 200) {
				this.scroll = false;
				this.getTopicsList();
			}
		}
	},
	created() {
		this.setLoading({show: true, text: '加载中...'})
		let _tab = this.$route.query.tab ? this.$route.query.tab : 'all';
		// 非返回，加载新数据
		if(this.searchKey.tab != _tab || this.topicsList.length === 0) {
			this.getTopicsList({page: 0, tab: _tab});
		}
	}
}
</script>