import * as types from '../mutations_type'
import api from '../../libs/api';

const getTopic = ({commit}, payload) => {
	let {id, mdrender = true, accesstoken = '', success = null, fail = null} = payload;
	api.getTopic(id, {mdrender, accesstoken}).then(res => {
		console.log('getTopic .... ', res);
		commit(types.GET_TOPIC, res.data.data)
		success && success(res.data.data);
	}).catch(res => {
		console.error(res);
		fail && fail(res);
	});
}



export default {
	getTopic
}

