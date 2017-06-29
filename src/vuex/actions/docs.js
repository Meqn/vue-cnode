import * as types from '../mutations_type'

/**
 * 设置 taost 状态
 */
/**
 * [设置 taost]
 * @param  {[type]} payload        [show|type|text|time|callback]
 */
const setToast = ({commit}, payload) => {
	let {show = true, type = 'loading', text = 'loading...', time = 0, callback = null} = payload;
	if(show) {
		commit(types.SET_TOAST, {show, type, text})
	} else {
		commit(types.SET_TOAST, {type, text});
		setTimeout(() => {
			commit(types.SET_TOAST, {show});
			callback && typeof callback === 'function' && callback()
		}, time)
	}
}
/**
 * 设置 loading 状态
 */
const setLoading = ({commit}, payload) => {
	commit(types.SET_LOADING, payload)
}

export default {
	setToast,
	setLoading
}