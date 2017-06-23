<template>
<div class="topic">
	<div class="topic-item topic-header">
		<h2 class="mdui-typo-title topic-title">聊聊 Vue 组件命名那些事</h2>
		<div class="mdui-list mdui-list-default mdui-list-dense topic-meta">
			<div class="mdui-list-item">
				<div class="mdui-list-item-avatar">
					<img src="http://static.mengqing.org/extension/avatar.png">
				</div>
				<div class="mdui-list-item-content w100">
					<div class="mdui-list-item-title">Brendan Lim</div>
					<div class="mdui-list-item-text mdui-list-item-one-line font12">
						发布于5天前，2063次浏览
					</div>
				</div>
				<div class="like">
					<i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-theme-accent">&#xe87e;</i>
					<div>收藏</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mdui-typo topic-item topic-content">
		<blockquote>
			<p>无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p>
			<footer>马尔克斯 ——《百年孤独》</footer>
		</blockquote>
		<p>诚如上述所言，编程中变量命名确实令人很头疼。我们模糊地知道，Vue 组件的名称最好不要和原生 HTML 标签相同。为了避免重名，通常会在组件名称前面加上一个前缀，如 el-button、el-input、el-date-picker。这通常不会有什么问题，但有时候你的模板中混杂了原生 HTML 标签和组件标签，要想区分它们并不是很容易。</p>
		<p>当我看到 Ant.design 的 React 组件是下面这样的时候，我感觉到一种自由的味道。首先，组件名可以使用原生 HTML 标签名，意味着再也不用较劲脑汁去规避原生 HTML 标签了。另外，这些组件都使用了首字母大写标签名，使它们很容易地与原生小写的 HTML 标签区分。</p>
	</div>
	<comments></comments>
	<comments-post></comments-post>
</div>
</template>

<style lang="scss" scoped>
.topic-item{margin-bottom: 8px; background-color: #fff;}
.topic-title{padding: 1em 16px 0; margin: 0; letter-spacing: 0;}
.topic-meta{padding: 0;}
.topic-meta .like{white-space: nowrap; text-align: center;}

.topic-content{padding: 1em;}
</style>

<script>
import comments from '@components/comments'
import commentsPost from '@components/comments-post'

export default {
	name: 'topicView',
	components: {
		comments, commentsPost
	}
}
</script>