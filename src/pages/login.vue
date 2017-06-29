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
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'login',
	data() {
		return {
			token: '',
		}
	},
	created() {
		if(this.userName) {
			this.$router.push({path:'/my'});
		}
	},
	computed: {
		...mapGetters({
			userName: 'getUserName'
		})
	},
	methods: {
		...mapActions({
			getUser: 'getUser',
			setToast: 'setToast',
			hideToast: 'hideToast'
		}),
		login() {
			var context = this;
			context.setToast({type: 'loading', text: '登录中...'})
			context.getUser({
				token: context.token,
				success() {
					context.token = '';
					context.setToast({
						show: false,
						type: 'done',
						text: '登录成功!',
						time: 1000,
						callback() {
							context.$router.push({
								path: context.$route.query.redirect ? context.$route.query.redirect : '/my'
							});
						}
					});
				},
				fail(err) {
					console.error(err)
					context.token = '';
					context.setToast({
						show: false,
						type: 'fail',
						text: '登录失败!',
						time: 1000
					});
				}
			});
		}
	}
}
</script>