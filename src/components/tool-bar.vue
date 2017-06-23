<template>
<header class="mdui-appbar mdui-appbar-fixed">
	<div class="mdui-toolbar mdui-color-theme">
		<a v-show="$route.meta.toolBarLeft == 'menu'" href="javascript:;" class="mdui-btn mdui-btn-icon" mdui-drawer="{target: '#main-drawer'}"><i class="mdui-icon material-icons">&#xe5d2;</i></a>
		<a @click="$router.go(-1)" v-show="$route.meta.toolBarLeft == 'return'" href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">&#xe31b;</i></a>
		<i v-show="$route.meta.toolBarLeft == 'none'" class="mdui-icon">&nbsp;</i>
		<span class="mdui-typo-title mdui-center">{{title}}</span>
		<!-- <div class="mdui-toolbar-spacer"></div> -->
		<a href="post.html" class="mdui-btn mdui-btn-icon rotate45">
			<i class="mdui-icon material-icons">&#xe163;</i>
		</a>
	</div>
</header>
</template>

<script>
const topicsTitle = {
	all: "全部",
	good: "精华",
	share: "分享",
	ask: "问答",
	job: "招聘"
}
export default {
	computed: {
		title() {
			const Routes = this.$route,
				RouteMeta = Routes.meta;
			let _title = RouteMeta.title;

			if(_title === 'topics') {
				if(Routes.query.tab)
					_title = topicsTitle[Routes.query.tab]
				else
					_title = '主题'
			}

			return _title;
		}
	}
}
</script>