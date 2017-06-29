<template>
<header class="mdui-appbar mdui-appbar-fixed">
	<div class="mdui-toolbar mdui-color-theme">
		<a v-show="$route.meta.toolBarLeft == 'menu'" href="javascript:;" class="mdui-btn mdui-btn-icon" mdui-drawer="{target: '#main-drawer'}"><i class="mdui-icon material-icons">&#xe5d2;</i></a>
		<a @click="$router.go(-1)" v-show="$route.meta.toolBarLeft == 'return'" href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">&#xe31b;</i></a>
		<i v-show="$route.meta.toolBarLeft == 'none'" class="mdui-icon">&nbsp;</i>
		<span class="mdui-typo-title mdui-center" v-text="title"></span>
		<!-- <div class="mdui-toolbar-spacer"></div> -->
		<router-link :to="{path: '/post'}" class="mdui-btn mdui-btn-icon rotate45">
			<i class="mdui-icon material-icons">&#xe163;</i>
		</router-link>
	</div>
</header>
</template>

<script>

export default {
	name: 'toolbar',
	computed: {
		title() {
			let ret = 'CNode社区'
			let _route = this.$route,
				_title = _route.meta.title
			let _topics = {
				all: '全部',
				good: '精华',
				share: '分享',
				ask: '问答',
				job: '招聘'
			}
			if(_title === 'topics') {
				ret = _route.query['tab'] ? _topics[_route.query['tab']] || '主题' : '首页'
			} else {
				ret = _title
			}
			return ret
		}
	}
}
</script>