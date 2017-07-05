<template>
<topics-list :topics="topicsList"></topics-list>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import topicsList from '@components/topics-list'

export default {
	name: 'favorite',
	components: {
		topicsList
	},
	data() {
		return {
			topicsList: []
		}
	},
	computed: {
		...mapState({
			favoriteTopics: state => state.user.favorite
		}),
		...mapGetters({
			username: 'getUserName'
		})
	},
	methods: {
		...mapActions({
			getFavorite: 'getFavorite',
			setLoading: 'setLoading'
		}),
		// 获取收藏
		getFavoriteTopics(username) {
			const context = this;
			context.getFavorite({
				username,
				success(res) {
					context.success(res)
				},
				fail(res) {
					console.error(res)
					context.setLoading({show: false, tip: '获取数据失败'});
				}
			});
		},
		success(data) {
			const context = this;
			context.topicsList = data.data;
			context.setLoading({
				show: false,
				tip: context.topicsList.length > 0 ? '只收藏了这点？' : '暂无数据'
			});
		}
	},
	created() {
		this.setLoading({ show: true, text: '加载中...' })
		if(this.favoriteTopics.success) {
			this.success(this.favoriteTopics);
		} else {
			this.getFavoriteTopics(this.username)
		}
	}
}
</script>