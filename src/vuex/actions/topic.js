import * as types from '../mutations_type'
import api from '../../libs/api';

const getTopic = ({commit}, payload) => {
	let {id, mdrender = true, accesstoken = '', success = null, fail = null} = payload;
	api.getTopic(id, {mdrender, accesstoken}).then(res => {
		console.log('getTopic .... ', res);
		commit(types.GET_TOPIC, res.data.data);
		typeof success === 'function' && success(res.data.data);
	}).catch(res => {
		console.error(res);
		typeof fail === 'function' && fail(res);
	});
}

const setSeachKey = ({commit}, payload) => {
	commit(types.SET_SEARCH_KEY, payload)
}
const setTopicsPage = ({commit}) => {
	commit(types.SET_TOPIC_PAGE);
}
const setScrollY = ({commit}, payload) => {
	commit(types.SET_SCROLL_Y, payload)
}
/**
 * 获取topics列表
 * @param {*} payload 
 */
const getTopics = ({state, commit, dispatch}, payload) => {
	let {success = null, fail = null} = payload;
	console.log('payload ....', state.searchKey.page)
	if (state.searchKey.page == 0) {
		dispatch('setScrollY', 0)
	}
	commit(types.SET_TOPIC_PAGE)
	api.getTopics(state.searchKey).then(res => {
		console.log('getTopics ... ', res)
		commit(types.SET_TOPIC_LIST, res.data.data)
		typeof success === 'function' && success(res.data.data)
	}).catch(res => {
		console.error(res);
		typeof fail === 'function' && fail(res);
	});
}
const collectTopic = ({state, commit}, {id}) => {
	if(state.topic.id == id)
		commit(types.FAVORITE_TOPIC)
}




export default {
	getTopic,
	setSeachKey,
	setTopicsPage,
	setScrollY,
	getTopics,
	collectTopic
}

