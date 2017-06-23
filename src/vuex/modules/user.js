
const state = {
	user: {},
	userinfo: {}
}

const getters = {
	getUserName(state) {
		return state.user['userName']
	},
	getUserInfo(state) {
		return state.userinfo
	}
}

const mutations = {
	setUser(state, payload) {
		state.user = payload
	},
	setUserInfo(state, payload) {
		state.userinfo = payload
	}
}

export default {
	state,
	getters,
	mutations
}