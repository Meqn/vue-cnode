<template>
<div class="topics">
	<div id="topics-tab" class="mdui-tab mdui-tab-full-width whiteBg">
		<router-link :to="{name: 'myTopics', query: {type : 'reply'}}" class="mdui-ripple" :class="{'mdui-tab-active': type === 'reply'}" active-class="mdui-tab-active" exact>最近回复</router-link>
		<router-link :to="{name: 'myTopics', query: {type : 'post'}}" class="mdui-ripple" :class="{'mdui-tab-active': type === 'post'}" active-class="mdui-tab-active" exact>最新发布</router-link>
	</div>
	<transition name="slide-fade" mode="out-in">
	<my-topics-list :topics="topicsList[type]" :key="key"></my-topics-list>
	</transition>
</div>
</template>

<style lang="scss" scoped>
.topic-list{
	&-item{
		margin-bottom: 5px; background-color: #fff;
	}
}
</style>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

import myTopicsList from '@components/my-topics-list'

export default {
	name: 'myTopics',
	components: {
		myTopicsList
	},
	data() {
		return {
			type: 'recent_replies',
			topicsList: {}
		}
	},
	created() {
		if(this.userData['recent_topics'] || this.userData['recent_replies']) {
			this.success(this.userData);
		} else {
			this.getTopics();
		}
	},
	mounted() {
		// tab 当前状态
		this.$nextTick(() => {
			if(window['mdui']) {
				new mdui.Tab('#topics-tab');
			} else {
				window.addEventListener('DOMContentLoaded', () => {new mdui.Tab('#topics-tab')}, false);
			}
		})
	},
	computed: {
		...mapState({
			userData: state => state.user.userData
		}),
		...mapGetters({
			username: 'getUserName'
		}),
		key() {
			return this.$route.fullPath.replace(/[\/|\?|=]/g, '_');
		}
	},
	watch: {
		'$route' (to, from) {
			this.type = this.getType(to);
		}
	},
	methods: {
		...mapActions({
			getUserData: 'getUserData',
			setLoading: 'setLoading'
		}),
		getTopics() {
			const context = this;
			context.setLoading({show: true, text: '加载中...'})
			context.getUserData({
				username: context.username,
				success(res) {
					context.success(res);
				},
				fail(res) {
					console.error(res.message)
					context.setLoading({show: false, tip: '加载失败'});
				}
			});
		},
		success(data) {
			const context = this;
			context.topicsList = data;
			context.setLoading({
				show: false,
				tip: context.topicsList[context.type].length > 0 ? '就这么点...' : '暂无数据'
			});
		},
		getType(route) {
			return route.query.type && route.query.type === 'post' ? 'recent_topics' : 'recent_replies'
		}
	}
}

</script>