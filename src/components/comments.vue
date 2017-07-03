<template>
	<div class="topic-item topic-comments">
		<div class="mdui-typo-subheading mdui-m-x-2 mdui-p-y-2 mdui-text-color-grey-900">
			<i class="mdui-icon material-icons">&#xe7fb;</i> <span v-text="count"></span>条评论
			<span style="float:right">去评论</span>
		</div>
		<comment-item v-for="item in comments" :item="item" :key="item.id"></comment-item>
	</div>
</template>

<style lang="scss">
.topic-comments-item{border-top: 1px solid rgba(0, 0, 0, .12); overflow: hidden;}
.topic-comments-action .up{transform: scale(.8);}
.topic-comments-action .up-count{margin: 0 6px 0 2px; font-size: 16px;}
.topic-comments-action .mdui-icon{cursor: pointer;}
.topic-comments-content{font-size: 14px; text-align: justify; padding: 0 16px;}
.topic-comments-content p{margin: 0 0 5px 0;}
.topic-comments-reply{padding: 8px 16px;}
</style>

<script>
import commentItem from '@components/comments-item'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
	props: ['comments', 'count'],
	components: {
		commentItem
	}
}
</script>

