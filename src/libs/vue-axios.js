
/**
 * [Vue axios plugin]
 * @return {[type]} [description]
 *
 * Vue是全局变量时，自动 install
 */

;(function(window) {
	function Plugin(Vue, axios) {
		if(Plugin.installed)
			return;
		Plugin.installed = true;

		if(!axios) {
			console.error('axios not found')
			return
		}

		Vue.axios = axios;
		Object.defineProperties(Vue.prototype, {
			axios: {
				get() {
					return axios
				}
			},
			$http: {
				get() {
					return axios
				}
			}
		});
	}

	if(typeof exports === 'object' && typeof module !== 'undefined') {
		module.exports = Plugin
	} else if(typeof define === 'function' && define.amd) {
		define([], function() {
			return Plugin;
		});
	} else if(window.Vue && window.axios) {
		Vue.use(Plugin, window.axios)
	}
}(this));



