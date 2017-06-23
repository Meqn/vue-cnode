<template>
<nav class="mdui-bottom-nav mdui-shadow-4" style="background-color: #fff;">
	<router-link to="/topics" class="mdui-ripple" active-class="mdui-bottom-nav-active">
		<i class="mdui-icon material-icons">&#xe1b8;</i>
		<label>Home</label>
	</router-link>
	<router-link :to="{name: 'favorite'}" class="mdui-ripple" active-class="mdui-bottom-nav-active">
		<i class="mdui-icon material-icons">&#xe90f;</i>
		<label>Favorite</label>
	</router-link>
	<router-link :to="{path: '/messages', query: {type : 'new'}}" class="mdui-ripple" active-class="mdui-bottom-nav-active">
		<i class="mdui-icon material-icons">&#xe1b7;</i>
		<label>Message</label>
	</router-link>
	<router-link to="/my" class="mdui-ripple" active-class="mdui-bottom-nav-active">
		<i class="mdui-icon material-icons">&#xe86b;</i>
		<label>Me</label>
	</router-link>
</nav>
</template>