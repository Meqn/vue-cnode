<template>
<ul class="mdui-list topic-list">
	<router-link v-for="item in topics" :to="{name: 'detail', params: {id: item.id}}" class="mdui-list-item mdui-ripple topic-list-item" tag="li" :key="item.id">
		<div class="mdui-list-item-avatar">
			<img :src="item.author.avatar_url">
		</div>
		<div class="mdui-list-item-content minw0">
			<div class="mdui-list-item-title mdui-text-truncate">
				{{item.title}}
			</div>
			<div class="mdui-list-item-text mdui-list-item-one-line">
				<span v-text="item.author.loginname"></span>
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
.topic-list-item{
	margin-bottom: 5px; background-color: #fff;
}
</style>

<script>
import loading from '@components/loading'

export default {
	props: ['topics'],
	components: {
		loading
	}
}
</script>