import * as types from '../mutations_type'
import actions from '../actions/topic'

const state = {
	topic: {}
}

const getters = {
	getId(state) {
		return state.topic['id']
	},
	getReply(state) {
		return state.topic['replies']
	}
}

const mutations = {
	[types.GET_TOPIC](state, payload) {
		state.topic = payload
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}

