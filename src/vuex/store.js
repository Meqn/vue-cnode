import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userinfo: {}
	},
	getters: {
		//
	},
	mutations: {
		setUserinfo(state, userinfo) {
			state.userinfo = userinfo
		}
	},
	actions: {
		//
	}
});


