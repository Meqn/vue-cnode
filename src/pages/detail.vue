<template>
<div class="topic" v-cloak>
	<div class="topic-item topic-header">
		<h2 class="mdui-typo-title topic-title" v-text="topic.title"></h2>
		<div class="mdui-list mdui-list-default mdui-list-dense topic-meta">
			<div class="mdui-list-item">
				<div class="mdui-list-item-avatar">
					<img :src="topic.author.avatar_url">
				</div>
				<div class="mdui-list-item-content w100">
					<div class="mdui-list-item-title" v-text="topic.author.loginname"></div>
					<div class="mdui-list-item-text mdui-list-item-one-line font12">
						发布于5天前，<span v-text="topic.visit_count"></span>次浏览
					</div>
				</div>
				<div class="like" v-if="topic.is_collect" @click="addFavorite()">
					<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-theme-accent">&#xe87d;</i>
					<div>已收藏</div>
				</div>
				<div class="like" v-else>
					<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-theme-accent">&#xe87e;</i>
					<div>收藏</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mdui-typo topic-item topic-content" v-html="topic.content"></div>
	<comments id="topic-comments" :comments="topic.replies" :count="topic.reply_count"></comments>
	<comments-post id="topic-comments-post"></comments-post>
	<button v-show="showComment" @click="goComment" class="mdui-fab mdui-fab-mini mdui-color-theme-accent mdui-fab-fixed mdui-ripple"><i class="mdui-icon material-icons">&#xe0b9;</i></button>
</div>
</template>

<style lang="scss" scoped>
[v-cloak] {display: none;}
.topic-item{margin-bottom: 8px; background-color: #fff;}
.topic-title{padding: 1em 16px 0; margin: 0; letter-spacing: 0;}
.topic-meta{padding: 0;}
.topic-meta .like{white-space: nowrap; text-align: center;}

.topic-content{padding: 1em;}
</style>

<script>
import comments from '@components/comments'
import commentsPost from '@components/comments-post'
import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'detail',
	components: {
		comments, commentsPost
	},
	data() {
		return {
			topic: {
				author: {},
				replies: [],
				reply_count: 0
			},
			showComment: true,
			showTop: false
		}
	},
	beforeRouteEnter(to, from, next) {
		if(to.params['id']) {
			next()
		} else {
			next('/topics')
		}
	},
	computed: {
		...mapGetters({
			topicData: 'getTopic',
			getToken: 'getToken'
		})
	},
	methods: {
		...mapActions({
			getTopic: 'getTopic',
			setToast: 'setToast',
			hideToast: 'hideToast',
			addFavorite: 'addFavorite'
		}),
		goComment(event) {
			this.$scrollTo('#topic-comments', {
				offset: -60,
				onDone: () => {
					this.showComment = !this.showComment
				}
			})
		},
		collectTopic(id) {
			console.log('id', id)
			// this.addFavorite({topic_id: topic.id})
		}
	},
	created() {
		let _id = this.$route.params['id']
		let _params = {
			id: _id,
			accesstoken: this.getToken ? this.getToken : '',
			success: res => {
				this.topic = res;
				this.setToast({
					show: false,
					type: 'done',
					text: '加载成功!',
					time: 1000
				});
			},
			fail: res => {
				this.setToast({
					show: false,
					type: 'fail',
					text: '加载失败!',
					time: 1000
				})
			}
		}

		if(this.topicData['id'] && _id == this.topicData['id']) {
			this.topic = this.topicData
		} else {
			this.setToast({type: 'loading', text: '正在加载...'})
			this.getTopic(_params);
		}
	}
}
</script>