<template>
<nav class="mdui-bottom-nav mdui-shadow-4 g-bottom-menu">
	<router-link to="/topics" class="mdui-ripple" active-class="mdui-bottom-nav-active">
		<i class="mdui-icon material-icons">&#xe1b8;</i>
		<label>Home</label>
	</router-link>
	<router-link :to="{name: 'favorite'}" class="mdui-ripple" active-class="mdui-bottom-nav-active">
		<i class="mdui-icon material-icons">&#xe90f;</i>
		<label>Favorite</label>
	</router-link>
	<router-link :to="{path: '/messages'}" class="mdui-ripple" active-class="mdui-bottom-nav-active">
		<i class="mdui-icon material-icons">&#xe1b7;</i>
		<label>Message</label>
		<span v-if="$store.state.user.messagesCount > 0" class="badge"></span>
	</router-link>
	<router-link to="/my" class="mdui-ripple" active-class="mdui-bottom-nav-active">
		<i class="mdui-icon material-icons">&#xe86b;</i>
		<label>Me</label>
	</router-link>
</nav>
</template>

<style lang="scss" scoped>
.g-bottom-menu{
	background-color: #fff;

	.badge{
		position: absolute; top: 50%; left: 50%;
		width: 8px; height: 8px;
		margin: -24px 0 0 12px;
		background-color: #ff5252; border-radius: 50%;
	}
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	created() {
		if(this.token && this.$store.state.user.messagesCount === -1) {
			this.getMessagesCount({token: this.token})
		}
	},
	computed: {
		...mapGetters({
			token: 'getToken'
		})
	},
	methods: {
		...mapActions({
			getMessagesCount: 'getMessagesCount'
		})
	}
}
</script>