import * as types from '../mutations_type'
import actions from '../actions/docs'

const state = {
	toast: {
		show: false,
		type: '',		// ['done' | 'fail' | 'loading']
		text: '',
		time: 0,
		callback: null
	},
	loading: {
		show: true,
		text: 'loading...',
		tip: '暂无数据'
	}
}

const mutations = {
	[types.SET_TOAST](state, payload) {
		state.toast = Object.assign(state.toast, payload);
	},
	[types.SET_LOADING](state, payload) {
		state.loading = Object.assign(state.loading, payload);
		return payload;
	}
}

export default {
	state,
	mutations,
	actions
}