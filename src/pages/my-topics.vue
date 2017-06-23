<template>
<div class="topics">
	<div id="topics-tab" class="mdui-tab mdui-tab-full-width message-tab" mdui-tab>
		<router-link :to="{name: 'myTopics', query: {type : 'reply'}}" class="mdui-ripple" :class="{'mdui-tab-active': type === 'reply'}" active-class="mdui-tab-active" exact>最近回复</router-link>
		<router-link :to="{name: 'myTopics', query: {type : 'post'}}" class="mdui-ripple" :class="{'mdui-tab-active': type === 'post'}" active-class="mdui-tab-active" exact>最新发布</router-link>
	</div>
	<ul class="mdui-list topic-list">
		<router-link v-for="item in topicsList[type]" :to="{name: 'topicView', params: {id: item.id}}" class="mdui-list-item mdui-ripple topic-list-item" tag="li" :key="item.id">
			<div class="mdui-list-item-avatar">
				<img :src="item.author.avatar_url">
			</div>
			<div class="mdui-list-item-content minw0">
				<div class="mdui-list-item-title mdui-text-truncate">
					{{item.title}}
				</div>
				<div class="mdui-list-item-text mdui-list-item-one-line">
					<span v-text="item.author.loginname"></span>
					<div class="mdui-float-right">
						<i class="mdui-icon material-icons mdui-icon-mini mdui-text-color-grey-300">&#xe192;</i>
						<span class="">10分钟前</span>
					</div>
				</div>
			</div>
		</router-link>
		<li v-if="isLoading" class="tac"><div class="g-loading"></div> <span class="mdui-text-color-grey-500">Loading...</span></li>
		<li v-if="noData">
			<div class="g-empty"><span class="line"></span><span class="text">暂无数据</span><span class="line"></span></div>
		</li>
	</ul>
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
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
	name: 'myTopics',
	data() {
		return {
			isLoading: true,
			noData: false,
			type: 'recent_replies',
			topicsList: {}
		}
	},
	created() {
		let _username = this.getUserName;
		this.type = this.getType(this.$route);

		if(this.myTopics['recent_replies'] && this.myTopics['recent_topics']) {
			this.getSuccess(this.myTopics);
		} else {
			this.getTopics(_username)
		}
	},
	mounted() {
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
			userinfo: state => state.user.userinfo
		}),
		// userinfo = myTopics
		...mapGetters({
			getUserName: 'getUserName',
			myTopics: 'getUserInfo'
		})
	},
	watch: {
		'$route' (to, from) {
			this.type = this.getType(to);
		}
	},
	methods: {
		...mapMutations({
			setUserInfo: 'setUserInfo'
		}),
		getTopics(username) {
			this.$http.get('/user/'+ username).then(res => {
				console.log(res);
				var _data = res.data.data;
				this.setUserInfo(_data);
				this.getSuccess(_data)
			}).catch(error => {
				console.error(error);
			});
		},
		getSuccess(data) {
			this.topicsList = data;
			this.isLoading = false;
			this.noData = this.topicsList[this.type].length > 0 ? false : true;
		},
		getType(route) {
			return route.query.type && route.query.type === 'post' ? 'recent_topics' : 'recent_replies'
		}
	}
}

</script>