<template>
	<div class="mdui-m-a-2">
		<div class="mdui-textfield mdui-m-t-5">
			<input class="mdui-textfield-input" type="text" placeholder="Access Token" v-model="token">
		</div>
		<div class="mdui-p-t-2">
			<button class="mdui-btn mdui-btn-block mdui-ripple mdui-color-theme-accent" @click="login">登 录</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			token: '',
		}
	},
	created() {
		if(this.$store.state.userinfo.userId) {
			this.$router.push({
				path: '/my'
			});
		}
	},
	methods: {
		login() {
			this.$http.post('/accesstoken', {
				accesstoken: this.token
			}).then(res => {
				if(res.status === 200) {
					const data = res.data;
					const user = {
						userId: data.id,
						userName: data.loginname,
						avatar: data.avatar_url,
						token: this.token
					}
					window.sessionStorage.setItem('user', JSON.stringify(user));
					this.$store.commit('setUserinfo', user);
					this.token = '';

					this.$router.push({
						path: this.$route.query.redirect ? this.$route.query.redirect : '/my'
					});
				}
			}).catch(err => {
				console.error(err);
			});
		}
	}
}
</script>