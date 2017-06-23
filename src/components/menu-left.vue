<template>
<aside class="mdui-drawer mdui-color-grey-50" id="main-drawer">
	<div class="mdui-list">
		<router-link to="/me" class="mdui-list-item mdui-ripple">
			<div class="mdui-list-item-avatar"><img src="http://static.mengqing.org/extension/avatar.png"></div>
			<div class="mdui-list-item-content minw0">
				<div class="mdui-list-item-title">Brunch Lee</div>
				<div class="mdui-list-item-text mdui-text-truncate">签名这么短，让我怎么发挥一下特产！</div>
			</div>
		</router-link>
	</div>
	<hr class="mdui-divider mdui-divider-inset">
	<ul class="mdui-list">
		<router-link to="/topics?tab=all" tag="li" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe1db;</i>
			<div class="mdui-list-item-content">全部</div>
		</router-link>
		<router-link to="/topics?tab=good" tag="li" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe8d0;</i>
			<div class="mdui-list-item-content">精华</div>
		</router-link>
		<router-link to="/topics?tab=share" tag="li" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe80d;</i>
			<div class="mdui-list-item-content">分享</div>
		</router-link>
		<router-link to="/topics?tab=ask" tag="li" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe0bf;</i>
			<div class="mdui-list-item-content">问答</div>
		</router-link>
		<router-link to="/topics?tab=job" tag="li" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe7ef;</i>
			<div class="mdui-list-item-content">招聘</div>
		</router-link>
		<hr class="mdui-divider mdui-divider-inset">
		<router-link to="/messages" tag="li" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe7f5;</i>
			<div class="mdui-list-item-content">消息</div>
		</router-link>
		<li class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe001;</i>
			<div class="mdui-list-item-content">关于</div>
		</li>
		<router-link to="/login" tag="li" class="mdui-list-item mdui-ripple">
			<i class="mdui-list-item-icon mdui-icon material-icons">&#xe8ac;</i>
			<div class="mdui-list-item-content">注销</div>
		</router-link>
	</ul>
</aside>
</template>

<script>
export default {
	watch: {
		$route() {
			new mdui.Drawer('#main-drawer').close()
		}
	}
}
</script>
