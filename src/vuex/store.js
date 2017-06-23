import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import favorite from './modules/favorite'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user,
		favorite
	}
});


