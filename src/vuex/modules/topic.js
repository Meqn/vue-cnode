import * as types from '../mutations_type'
import actions from '../actions/topic'

const state = {
	topic: {},
	topicsList: [],
	scrollY: 0,
	searchKey: {
		page: 0,
		limit: 20,
		tab: "all",
		mdrender: true
	}
}

const getters = {
	getId(state) {
		return state.topic['id']
	},
	getReply(state) {
		return state.topic['replies']
	},
	getTopic(state) {
		return state.topic
	},
	getTopicsList(state) {
		return state.topicsList
	},
	getSearchKey(state) {
		return state.searchKey
	},
	getScrollY (state) {
		return state.scrollY
	}
}

const mutations = {
	[types.GET_TOPIC] (state, payload) {
		state.topic = payload
	},
	[types.SET_TOPIC_LIST] (state, payload) {
		if (state.searchKey.page === 1) {
			state.topicsList = payload
		} else {
			state.topicsList.push(...payload)
		}
	},
	[types.SET_SEARCH_KEY] (state, payload) {
		Object.assign(state.searchKey, payload);
	},
	[types.SET_TOPIC_PAGE] (state) {
		state.searchKey.page++
	},
	[types.SET_SCROLL_Y] (state, payload) {
		state.scrollY = payload
	},
	[types.COLLECT_TOPIC] (state) {
		state.topic.is_collect = true
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}

