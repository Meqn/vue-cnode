<template>
<div class="messages">
	<div class="mdui-tab mdui-tab-full-width whiteBg" id="messages-tab">
		<router-link :to="{path: '/messages', query: {type : 'new'}}" class="mdui-ripple" active-class="mdui-tab-active" exact>新消息</router-link>
		<router-link :to="{path: '/messages', query: {type : 'all'}}" class="mdui-ripple" active-class="mdui-tab-active" exact>历史消息</router-link>
	</div>
	<transition name="slide-fade" mode="out-in">
	<messages-list :messages="messages[type]" :key="key"></messages-list>
	</transition>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import messagesList from '@components/messages-list'

export default {
	name: 'messages',
	components: {
		messagesList
	},
	data() {
		return {
			type: 'hasnot_read_messages'
		}
	},
	watch: {
		'$route'(to, from) {
			this.type = this.getType(to)
		}
	},
	computed: {
		...mapGetters({
			token: 'getToken',
			messages: 'getMessages'
		}),
		key() {
			return this.$route.fullPath.replace(/[\/|\?|=]/g, '_');
		}
	},
	methods: {
		...mapActions({
			getMessages: 'getMessages',
			setLoading: 'setLoading'
		}),
		getAllMessages(token) {
			const context = this;
			context.getMessages({
				token: token,
				success(res) {
					context.success(res);
				},
				fail(res) {
					console.error(res.message)
					context.setLoading({show: false, tip: '获取数据失败'});
				}
			});
		},
		success(res) {
			this.setLoading({
				show: false,
				tip: this.messages[this.type].length > 0 ? '没有了...' : '暂无消息'
			});
		},
		getType(route) {
			return route.query['type'] && route.query['type'] == 'all' ? 'has_read_messages' : 'hasnot_read_messages'
		}
	},
	created() {
		this.setLoading({show: true, text: '加载中...'})
		this.type = this.getType(this.$route)
		if(this.messages && this.messages[this.type]) {
			this.success();
		} else {
			this.getAllMessages(this.token)
		}
	},
	mounted() {
		this.$nextTick(() => {
			if(window['mdui']) {
				new mdui.Tab('#messages-tab');
			} else {
				window.addEventListener('DOMContentLoaded', () => {new mdui.Tab('#messages-tab')}, false);
			}
		})
	}
}
</script>

