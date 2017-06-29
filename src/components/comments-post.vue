<template>
	<div class="topic-item topic-comments-post">
		<div class="mdui-typo-subheading mdui-m-x-2 mdui-p-y-2 mdui-text-color-grey-900">
			<i class="mdui-icon material-icons">&#xe0b9;</i> 我要评论
		</div>
		<hr class="mdui-divider">
		<div class="mdui-m-a-1">
			<textarea cols="30" rows="4" class="mdui-textarea" placeholder="请输入评论"></textarea>
		</div>
		<hr class="mdui-divider">
		<div class="tar mdui-m-a-2 mdui-p-b-2">
			<button class="mdui-btn mdui-btn-block mdui-ripple mdui-color-theme-accent">提 交</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.topic-comments-post textarea{border: none;}
</style>