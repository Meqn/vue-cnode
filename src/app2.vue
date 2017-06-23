<template>
<div id="app">
	<img src="./assets/images/node_logo.png">
	<h1 class="mdui-typo-display-1">{{title}}</h1>
	<h3 class="mdui-typo-title">{{subtitle}}</h3>
	<ul>
		<li><router-link to="/">Home</router-link></li>
		<li><router-link to="/about">About</router-link></li>
	</ul>
	<p>by lmq</p>
	<router-view></router-view>
	<topics-list></topics-list>
	<!-- <menu-left></menu-left> -->
	<menus></menus>
</div>
</template>

<script>
import topicsList from '@components/topics-list'
import menuLeft from '@components/menu-left'


export default {
	name: 'app',
	data() {
		return {
			title: 'Hello Vue!',
			subtitle: 'this is a simple demo.'
		}
	},
	created() {
		if(this.$route.name == 'about') {
			console.log('Page - about')
			console.log('menuLeft : '+ menuLeft)
		}
	},
	components: {
		topicsList,
		menuLeft
	}
}
</script>

<style lang="scss">
@each $val in (5,10,15,20) {
	.mb#{$val}{
		margin-bottom: $val + px;
	}
}
h1{
	font-size: 36px; color: #37EE0B;
}
</style>