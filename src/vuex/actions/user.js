
import * as types from '../mutations_type';
import {sessionStore} from '../../libs/utils'
import api from '../../libs/api';
import {collectTopic} from './topic'

/**
 * 获取本地登录用户
 */
const getStoreUser = ({commit}) => {
	if(sessionStore('user')) {
		commit(types.SET_USER, JSON.parse(sessionStore('user')))
	}
}
/**
 * 保存用户登录
 * @param  {[type]} data [用户基本信息]]
 */
const setStoreUser = (data) => {
	sessionStore('user', JSON.stringify(data));
}
/**
 * [用户登录]
 * @param  {[type]} payload        [token, success, fail]
 */
const getUser = ({commit}, payload) => {
	api.login(payload['token']).then(res => {
		console.log('user ... ', res)
		let {id, loginname, avatar_url} = res.data;
		let _data = {
			id: id,
			username: loginname,
			avatar: avatar_url,
			token: payload['token']
		}
		commit(types.SET_USER, _data);
		setStoreUser(_data);
		payload['success'] && payload['success'](_data)
	}).catch(res => {
		payload['fail'] && payload['fail'](res);
	});
}
/**
 * [获取用户信息]
 * @param  {[Obj]} payload        [username, success, fail]
 */
const getUserData = ({commit}, payload) => {
	api.getUserData(payload['username']).then(res => {
		console.log('userData ... ', res)
		let _data = res.data.data;
		commit(types.SET_USERDATA, _data);
		payload['success'] && payload['success'](_data)
	}).catch(res => {
		payload['fail'] && payload['fail'](res);
	});
}
/**
 * [获取用户收藏的主题]
 * @param  {[type]} payload        [username, success, fail]
 */
const getFavorite = ({commit}, payload) => {
	api.getFavorite(payload['username']).then(res => {
		console.log('getFavorite ... ', res)
		let _data = res.data;
		commit(types.SET_FAVORITE, _data);
		payload['success'] && payload['success'](_data);
	}).catch(res => {
		payload['fail'] && payload['fail'](res);
	});
}
/**
 * 收藏帖子
 * @param {*} param0 
 * @param {*} payload 
 */
const addFavorite = ({commit, dispatch}, payload) => {
	const {topic_id, accesstoken, success = null, fail = null} = payload
	api.addFavorite(accesstoken, topic_id).then(res => {
		console.log('addFavorite ... ', res)
		commit('types.MARK_MESSAGE')
		dispatch('collectTopic', {id: topic_id})
		typeof success === 'function' && success(res)
	}).catch(res => {
		console.error(res)
		typeof fail === 'function' && fail(res)
	})
	
}

const getMessages = ({commit}, payload) => {
	api.getMessages(payload['token']).then(res => {
		console.log('getMessages ... ', res)
		let _data = res.data.data;
		commit(types.GET_MESSAGES, _data);
		payload['success'] && payload['success'](_data);
	}).catch(res => {
		payload['fail'] && payload['fail'](res);
	})
}
const getMessagesCount = ({commit}, payload) => {
	api.getMessagesCount(payload['token']).then(res => {
		console.log('getMessagesCount ... ', res)
		let _data = res.data.data;
		commit(types.GET_MESSAGES_COUNT, _data);
		payload['success'] && payload['success'](_data);
	}).catch(res => {
		payload['fail'] && payload['fail'](res);
	})
}
const markMessageAll = ({commit, dispatch}, payload) => {
	api.markMessageAll(payload['token']).then(res => {
		console.log('markMessageAll ... ', res)
		commit(types.MARK_MESSAGE);
		dispatch('getMessagesCount', {token: payload['token']});
		payload['success'] && payload['success'](res);
	}).catch(res => {
		payload['fail'] && payload['fail'](res);
	})
}
const markMessageOne = ({commit, dispatch}, payload) => {
	api.markMessageOne(payload['token'], payload['msgId']).then(res => {
		console.log('markMessageOne ... ', res)
		commit(types.MARK_MESSAGE);
		dispatch('getMessagesCount', {token: payload['token']});
		payload['success'] && payload['success'](res);
	}).catch(res => {
		payload['fail'] && payload['fail'](res);
	})
}


export default {
	getUser,
	getUserData,
	getStoreUser,
	getFavorite,
	addFavorite,
	getMessages,
	getMessagesCount,
	markMessageAll,
	markMessageOne
}


