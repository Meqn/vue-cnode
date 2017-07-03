import Vue from 'vue'
import axios from 'axios'
import VueAxios from './vue-axios'

Vue.use(VueAxios, axios)

// Vue公共混合
Vue.mixin({
	created() {
		// 设置 axios 接口请求 默认基础url
		this.$http.defaults.baseURL = 'https://cnodejs.org/api/v1'
	}
})

/**
 * 登录
 */
const login = token => {
	return axios.post('/accesstoken', {
		accesstoken: token
	})
}
/**
 * 获取用户信息
 * @param  {[str]} username [用户名]
 */
const getUserData = username => {
	return axios.get('/user/' + username)
}
/**
 * 获取用户收藏主题
 * @param  {[str]} username [用户名]
 */
const getFavorite = username => {
	return axios.get('/topic_collect/' + username)
}
const addFavorite = (accesstoken, topic_id) => {
	return axios.post('/topic_collect/collect', {accesstoken, topic_id})
}
/**
 * [获取所有消息]
 * @param  {[str]} token [token]
 */
const getMessages = token => {
	return axios.get('/messages', {
		params: {accesstoken: token}
	})
}
/**
 * [获取未读消息个数]
 * @param  {[str]} token [token]
 */
const getMessagesCount = token => {
	return axios.get('/message/count', {
		params: {accesstoken: token}
	})
}
/**
 * [标记全部消息已读]
 * @param  {[str]} token [token]
 */
const markMessageAll = token => {
	return axios.post('/message/mark_all', {accesstoken: token})
}
/**
 * [标记单个消息已读]
 * @param  {[str]} token [token]
 * @param  {[str]} msgId [message id]
 */
const markMessageOne = (token, msgId) => {
	return axios.post('/message/mark_one/'+ msgId, {accesstoken: token})
}

/**
 * [获取帖子内容]
 * @param  {[type]} id   [帖子 id]
 * @param  {[type]} opts [description]
 * @return {[type]}      [description]
 */
const getTopic = (id, opts) => {
	return axios.get('/topic/'+ id, {
		params: opts
	})
}

const getTopics = (opts = {}) => {
	return axios.get('/topics', {params: opts})
}






export default {
	login,
	getUserData,
	getFavorite,
	addFavorite,
	getMessages,
	getMessagesCount,
	markMessageAll,
	markMessageOne,
	getTopic,
	getTopics
}

