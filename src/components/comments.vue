<template>
	<div class="topic-item topic-comments">
		<div class="mdui-typo-subheading mdui-m-x-2 mdui-p-y-2 mdui-text-color-grey-900">
			<i class="mdui-icon material-icons">&#xe7fb;</i> 19条回复
		</div>
		<hr class="mdui-divider">

		<div class="mdui-p-b-1">
			<div class="mdui-list mdui-list-default mdui-list-dense">
				<div class="mdui-list-item">
					<div class="mdui-list-item-avatar">
						<img src="http://static.mengqing.org/extension/avatar.png">
					</div>
					<div class="mdui-list-item-content w100">
						<div class="mdui-list-item-title">Brendan Lim</div>
						<div class="mdui-list-item-text font12">发布于5天前</div>
					</div>
					<div class="g-flex g-flex-middle mdui-text-color-grey topic-comments-action">
						<i class="mdui-icon material-icons up">&#xe8dc;</i>
						<span class="up-count">234</span>
						<i class="mdui-icon material-icons">&#xe15e;</i>
					</div>
				</div>
			</div>
			<div class="topic-comments-content">
				<p>我现在可以用生产环境+压缩之类的产出最后的js以及index.html和相关的资源了</p>
				<p>那么问题来了，我怎么去使用它呢，dev环境我是使用webpack-dev-server做服务的</p>
			</div>
		</div>
		<hr class="mdui-divider">

		<div class="mdui-p-b-1">
			<div class="mdui-list mdui-list-default mdui-list-dense">
				<div class="mdui-list-item">
					<div class="mdui-list-item-avatar">
						<img src="http://static.mengqing.org/extension/avatar.png">
					</div>
					<div class="mdui-list-item-content w100">
						<div class="mdui-list-item-title">Brendan Lim</div>
						<div class="mdui-list-item-text font12">发布于5天前</div>
					</div>
					<div class="g-flex g-flex-middle mdui-text-color-grey topic-comments-action">
						<i class="mdui-icon material-icons up mdui-text-color-theme-accent">&#xe8dc;</i>
						<span class="up-count">234</span>
						<i class="mdui-icon material-icons">&#xe15e;</i>
					</div>
				</div>
			</div>
			<div class="topic-comments-content">
				<p>我现在可以用生产环境+压缩之类的产出最后的js以及index.html和相关的资源了</p>
				<p>那么问题来了，我怎么去使用它呢，dev环境我是使用webpack-dev-server做服务的</p>
			</div>
			<div class="topic-comments-reply">
				<textarea cols="30" rows="4" class="mdui-textarea"></textarea>
				<div class="tar mdui-m-t-1">
					<button class="mdui-btn mdui-ripple mdui-btn-dense mdui-color-theme-accent">回复</button>
				</div>
			</div>
		</div>
		<hr class="mdui-divider">

		<div class="mdui-p-b-1">
			<div class="mdui-list mdui-list-default mdui-list-dense">
				<div class="mdui-list-item">
					<div class="mdui-list-item-avatar">
						<img src="http://static.mengqing.org/extension/avatar.png">
					</div>
					<div class="mdui-list-item-content w100">
						<div class="mdui-list-item-title">Brendan Lim</div>
						<div class="mdui-list-item-text font12">发布于5天前</div>
					</div>
					<div class="g-flex g-flex-middle mdui-text-color-grey topic-comments-action">
						<i class="mdui-icon material-icons up">&#xe8dc;</i>
						<span class="up-count">234</span>
						<i class="mdui-icon material-icons">&#xe15e;</i>
					</div>
				</div>
				<div class="topic-comments-content">
					<p>我现在可以用生产环境+压缩之类的产出最后的js以及index.html和相关的资源了</p>
					<p>那么问题来了，我怎么去使用它呢，dev环境我是使用webpack-dev-server做服务的</p>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss">
.topic-comments-action .up{transform: scale(.8);}
.topic-comments-action .up-count{margin: 0 6px 0 2px; font-size: 16px;}
.topic-comments-action .mdui-icon{cursor: pointer;}
.topic-comments-content{font-size: 14px; text-align: justify; padding: 0 16px;}
.topic-comments-content p{margin: 0 0 5px 0;}
.topic-comments-reply{padding: 8px 16px;}
</style>