<template>
<div id="app">
<!-- 主题色 强调色 底部导航固定 抽屉式导航左侧 -->
	<!-- 头部toolbar -->
	<tool-bar></tool-bar>

	<!-- 主体内容 -->
	<main class="layout-main">
		<transition name="slide-fade" mode="out-in">
		<!-- keep-alive 组建缓存，不销毁 -->
		<keep-alive exclude="topics,myTopics,login">
		<!-- key 同名路由有 transition 效果 -->
		<router-view :key="key"></router-view>
		</keep-alive>
		</transition>
	</main>

	<!-- 底部导航 -->
	<menu-bar v-show="!$route.meta.menuBottom"></menu-bar>
	<!-- 左侧抽屉式导航 -->
	<menu-left v-show="$route.meta.toolBarLeft == 'menu'"></menu-left>
</div>
</template>

<script>

import toolBar from '@components/tool-bar'
import menuLeft from '@components/menu-left'
import menuBar from '@components/menu-bar'


export default {
	name: 'app',
	data() {
		return {
			title: 'Hello Vue!',
			subtitle: 'this is a simple demo.'
		}
	},
	components: {
		toolBar, menuBar, menuLeft
	},
	computed: {
		key() {
			return this.$route.path.replace(/\//g, '_');
		}
	}
}
</script>

<style lang="scss">
@import './assets/styles/style';

@each $val in (5,10,15,20) {
	.mab#{$val}{
		margin-bottom: $val + px;
	}
}
</style>