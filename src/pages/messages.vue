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
import { mapState, mapGetters, mapActions } from 'vuex'
import messagesList from '@components/messages-list'

export default {
	name: 'messages',
	components: {
		messagesList
	},
	data() {
		return {
			type: 'hasnot_read_messages',
			messages: {}
		}
	},
	created() {
		if(this.messagesData && this.messagesData[this.type]) {
			this.success(this.messagesData);
		} else {
			this.getMessagesAll(this.token)
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
	},
	watch: {
		'$route'(to, from) {
			this.type = this.getType(to)
		}
	},
	computed: {
		...mapState({
			messagesData: state => state.user.messages
		}),
		...mapGetters({
			token: 'getToken'
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
		getMessagesAll(token) {
			const context = this;
			context.setLoading({show: true, text: '加载中...'})
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
			this.messages = res;
			this.setLoading({
				show: false,
				tip: this.messages[this.type].length > 0 ? '没有更多了...' : '暂无消息'
			});
		},
		getType(route) {
			return route.query['type'] && route.query['type'] === 'all' ? 'has_read_messages' : 'hasnot_read_messages'
		}
	}
}
</script>

