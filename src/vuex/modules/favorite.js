const state = {
	favorite: [1,2,3]
}

const getters = {
	getFavorite(state) {
		return state.favorite
	}
}

const mutations = {
	setFavorite(state, payload) {
		state.favorite = [...payload]
	}
}

export default {
	state,
	getters,
	mutations
}
