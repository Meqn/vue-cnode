<template>
	<div class="mdui-m-a-2 posts">
		<!-- <div class="g-flex g-flex-middle posts-title">
			<i class="mdui-icon material-icons">&#xe264;</i> 标题
		</div> -->
		<div class="mdui-textfield posts-field">
			<input class="mdui-textfield-input" type="text" placeholder="标题10个字以上">
		</div>
		<!-- <div class="g-flex g-flex-middle posts-title">
			<i class="mdui-icon material-icons">&#xe241;</i> 分类
		</div> -->
		<div class="mdui-textfield posts-field">
			<select class="mdui-textfield-input">
				<option value="0">请选择分类</option>
				<option value="0">分享</option>
				<option value="0">问答</option>
				<option value="0">招聘</option>
				<option value="0">测试</option>
			</select>
		</div>
		<!-- <div class="g-flex g-flex-middle posts-title">
			<i class="mdui-icon material-icons">&#xe23c;</i> 内容
		</div> -->
		<div class="mdui-textfield posts-field">
			<textarea class="mdui-textfield-input" cols="30" rows="12" placeholder="请输入内容..."></textarea>
		</div>
		<div class="">
			<button class="mdui-btn mdui-btn-block mdui-ripple mdui-color-theme-accent">提 交</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.posts{font-size: 16px;}
.posts textarea.mdui-textfield-input{min-height: 257px;}
.posts-field{padding-top: 0; margin-bottom: 16px;}
.posts-title .mdui-icon{margin-right: 8px;}
</style>
