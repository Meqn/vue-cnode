import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import axios from 'axios'
import VueAxios from './libs/vue-axios'

import App from './app'
import routes from './router/routes.js'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

import "@modules/mdui/dist/css/mdui.css"


if(window.sessionStorage.user) {
	store.commit('setUserinfo', JSON.parse(window.sessionStorage.user));
}
const router = new VueRouter({
	routes
});
router.beforeEach((to, from, next) => {
	if(to.meta.bgcolor) {
		document.body.style.backgroundColor = to.meta.bgcolor;
	} else {
		document.body.style.backgroundColor = '#f5f5f5';
	}
	if(to.matched.some(record => record.meta.requiresAuth)) {
		if(store.state.userinfo.userId) {
			next();
		} else {
			next({
				name: 'login',
				query: {
					redirect: to.fullPath
				}
			})
		}
	} else {
		next();
	}
});

// Vue公共混合
Vue.mixin({
	created() {
		// 设置 axios 接口请求 默认基础url
		this.$http.defaults.baseURL = 'https://cnodejs.org/api/v1'
	}
});
new Vue({
	el: '#app',
	router,
	store,
	mounted() {
	},
	methods: {
	},
	// ...App
	render: h => h(App)
})//.$mount('#app');

