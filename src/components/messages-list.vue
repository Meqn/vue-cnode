<template>
<ul class="message-list">
	<li class="message-item mdui-color-white" v-for="item in messages">
		<div class="g-flex hd">
			<span class="g-flex-item" v-if="item.type === 'at'"><a href="#">mengqing723</a> @了你</span>
			<span class="g-flex-item" v-if="item.type === 'reply'"><a href="#">lmq6</a> 回复了你</span>
			<span class="font12 mdui-text-color-grey-500">7分钟前</span>
		</div>
		<div class="bd" v-html="item.reply.content"></div>
		<div class="mdui-text-truncate ft">来自话题：<a href="#" v-text="item.topic.title"></a></div>
	</li>
	<li is="loading"></li>
</ul>
</template>

<style lang="scss" scoped>
.message{
	&-list{
		margin: 8px 0 !important;
		padding: 0;

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

<script>
import loading from '@components/loading'

export default {
	props: ['messages'],
	components: {
		loading
	}
}
</script>