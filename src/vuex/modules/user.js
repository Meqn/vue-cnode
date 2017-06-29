import * as types from '../mutations_type'
import actions from '../actions/user'

const state = {
	user: {},				// 用户登录信息
	userData: {},			// 用户信息
	favorite: {},			// 用户收藏主题
	messages: {},			// 所有消息
	messagesCount: -1,	// 未读消息个数
	messageMark: false 	// 对 messages 是否有操作
}

const getters = {
	getUserName(state) {
		return state.user['username']
	},
	getToken(state) {
		return state.user['token']
	}
}

const mutations = {
	[types.SET_USER](state, payload) {
		state.user = payload;
	},
	[types.SET_USERDATA](state, payload) {
		state.userData = payload
	},
	[types.SET_FAVORITE](state, payload) {
		state.favorite = payload
	},
	[types.ADD_FAVORITE](state, payload) {
		state.favorite.data.push(...payload);
	},
	[types.GET_MESSAGES](state, payload) {
		state.messages = payload
	},
	[types.GET_MESSAGES_COUNT](state, payload) {
		state.messagesCount = payload
	},
	[types.MARK_MESSAGE](state) {
		state.messageMark = true
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}