<template>
<ul class="mdui-list topic-list">
	<router-link v-for="item in topics" :to="{name: 'detail', params: {id: item.id}}" class="mdui-list-item mdui-ripple topic-list-item" tag="li" :key="item.id">
		<div class="mdui-list-item-avatar">
			<img :src="item.author.avatar_url">
		</div>
		<div class="mdui-list-item-content minw0">
			<div class="mdui-list-item-title mdui-text-truncate">
				<span :class="'tag '+topicTab(item.top, item.good, item.tab).className" v-text="topicTab(item.top, item.good, item.tab).text"></span> {{item.title}}
			</div>
			<div class="mdui-list-item-text mdui-list-item-one-line">
				<i class="mdui-icon material-icons mdui-icon-mini mdui-text-color-grey-300">&#xe625;</i>
				<span>{{item.reply_count}}/{{item.visit_count}}</span>
				<div class="mdui-float-right">
					<i class="mdui-icon material-icons mdui-icon-mini mdui-text-color-grey-300">&#xe192;</i>
					<span class="">10分钟前</span>
				</div>
			</div>
		</div>
	</router-link>
	<li is="loading" class="mdui-m-t-1"></li>
</ul>
</template>

<style lang="scss" scoped>
.topic-list{
	&-item{
		margin-bottom: 5px; background-color: #fff;

		.tag{
			padding: 2px 5px;
			font-size: .75em; color: #fff; vertical-align: middle;
			background-color: #dcdcdc; border-radius: 4px;

			&.top{
				background-color: #E91E63;
			}
			&.good{
				background-color: #2196F3;
			}
			&.ask{
				background-color: #4CAF50;
			}
			&.share{
				background-color: #FFC107;
			}
			&.job{
				background-color: #607D8B;
			}
		}
	}
}
</style>

<script>
import loading from '@components/loading'

export default {
	components: {
		loading
	},
	props: ['topics'],
	methods: {
		topicTab(top, good, tab) {
			let _tab = top ? 'top' : good ? 'good' : tab;
			let _ret = {
				top: {text: '置顶', className: 'top'},
				good: {text: '精华', className: 'good'},
				share: {text: '分享', className: 'share'},
				ask: {text: '问答', className: 'ask'},
				job: {text: '招聘', className: 'job'}
			}
			return _ret[_tab] || {text: '暂无', className: ''}
		}
	}
}
</script>