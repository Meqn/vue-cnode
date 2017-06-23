<template>
<div class="messages">
	<div class="mdui-tab mdui-tab-full-width message-tab" mdui-tab>
		<router-link :to="{path: '/messages', query: {type : 'new'}}" class="mdui-ripple" active-class="mdui-tab-active" exact>新消息</router-link>
		<router-link :to="{path: '/messages', query: {type : 'all'}}" class="mdui-ripple" active-class="mdui-tab-active" exact>历史消息</router-link>
	</div>
	<div class="message-list" id="message-new">
		<li class="message-item">
			<div class="g-flex hd">
				<span class="g-flex-item"><a href="#">mengqing723</a> @了你</span>
				<span class="font12 mdui-text-color-grey-500">16分钟前</span>
			</div>
			<div class="mdui-text-truncate ft">来自话题：<a href="#">我是如何实现简单的随机中文名生成器的</a></div>
		</li>
		<li class="message-item mdui-color-white">
			<div class="g-flex hd">
				<span class="g-flex-item"><a href="#">lmq6</a> 回复了你</span>
				<span class="font12 mdui-text-color-grey-500">7分钟前</span>
			</div>
			<div class="bd">
				<a href="#">@mengqing723</a> 哈哈哈，我回复了你。
			</div>
			<div class="mdui-text-truncate ft">来自话题：<a href="#">我是如何实现简单的随机中文名生成器的 Node版</a></div>
		</li>
	</div>
</div>
</template>

<style lang="scss">
.message{
	&-tab{
		margin-bottom: 8px; background-color: #fff;
	}
	&-list{
		a{
			color: #448AFF; text-decoration: none;
			&:hover{
				color:#FF5252;
			}
		}
	}
	&-item{
		list-style: none; padding: 16px; margin-bottom: 8px; background-color: #fff;

		.bd{
			margin: 8px 16px; text-align: justify;
		}
		.ft{
			margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(0, 0, 0, .12);
		}
	}
}
</style>