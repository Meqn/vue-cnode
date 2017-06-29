<template>
<div class="user">
	<div class="user-header">
		<div class="user-avatar">
			<img :src="avatar">
		</div>
		<div class="user-name">
			<span v-if="username !== ''">{{username}}</span>
			<router-link :to="{path: 'login'}" v-else>点击登录</router-link>
		</div>
	</div>
	<div class="mdui-list mdui-list-dense user-menu">
		<a href="topics.html" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue-accent">&#xe7fd;</i>
			<div class="mdui-list-item-content">我的资料</div>
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe409;</i>
		</a>
		<hr class="mdui-divider-inset mdui-m-y-0">
		<router-link to="/my/topics" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-red-accent">&#xe865;</i>
			<div class="mdui-list-item-content">我的主题</div>
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe409;</i>
		</router-link>
		<!-- <hr class="mdui-divider-inset mdui-m-y-0">
		<router-link to="/my/topics/reply" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-green">&#xe91f;</i>
			<div class="mdui-list-item-content">最新回复</div>
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe409;</i>
		</router-link> -->
		<!-- <hr class="mdui-divider-inset mdui-m-y-0">
		<a href="topics.html" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-pink">&#xe838;</i>
			<div class="mdui-list-item-content">我的收藏</div>
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe409;</i>
		</a> -->
		<hr class="mdui-divider-inset mdui-m-y-0">
		<router-link to="/messages" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-light-blue">&#xe7f7;</i>
			<div class="mdui-list-item-content">我的消息</div>
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe409;</i>
		</router-link>
	</div>
	<div class="mdui-list mdui-list-dense user-menu">
		<a href="#" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-indigo-accent">&#xe569;</i>
			<div class="mdui-list-item-content">关于项目</div>
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe409;</i>
		</a>
		<hr class="mdui-divider-inset mdui-m-y-0">
		<a href="#" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-teal">&#xe158;</i>
			<div class="mdui-list-item-content">意见反馈</div>
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe409;</i>
		</a>
		<hr class="mdui-divider-inset mdui-m-y-0">
		<a href="setting.html" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue-grey">&#xe8b8;</i>
			<div class="mdui-list-item-content">系统设置</div>
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe409;</i>
		</a>
	</div>
</div>
</template>

<style lang="scss">
.user-header{background-color: #fff; padding: 20px 0 10px; margin-bottom: 8px;}
.user-avatar{width: 72px; height: 72px; overflow: hidden; margin:0 auto 10px;}
.user-avatar img{width: 72px; height: 72px; border-radius: 50%; vertical-align: middle;}
.user-name{text-align: center; font-size: 16px;}
.user-name a{text-decoration: none; font-size: 14px;}

.user-menu{padding: 0 !important; margin-bottom: 8px !important; background-color: #fff !important;}
</style>

<script>
import {mapState, mapActions} from 'vuex'

export default {
	name: 'me',
	data() {
		return {
			username: '',
			avatar: 'http://static.mengqing.org/extension/avatar.png'
		}
	},
	created() {
		if(this.userinfo && this.userinfo.id) {
			let {username, avatar} = this.userinfo
			this.username = username
			this.avatar = avatar
		}
	},
	computed: {
		...mapState({
			userinfo: state => state.user.user
		})
	}
}
</script>