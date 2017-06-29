import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import {sessionStore} from './libs/utils'
// import axios from 'axios'
// import VueAxios from './libs/vue-axios'

import App from './app'
import routes from './router/routes.js'

Vue.use(VueRouter)
// Vue.use(VueAxios, axios)

import "@modules/mdui/dist/css/mdui.css"

const router = new VueRouter({
	routes,
	scrollBehavior (to, from, savePosition) {
		console.log(savePosition)
	}
});
router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0)		// 滚动到顶部
	if(to.meta.bgcolor) {
		document.body.style.backgroundColor = to.meta.bgcolor;
	} else {
		document.body.style.backgroundColor = '#f5f5f5';
	}
	if(to.matched.some(record => record.meta.requiresAuth)) {
		// if(store.state.user.user && store.state.user.user['id']) { 	// cookie
		if(sessionStore('user') && JSON.parse(sessionStore('user'))['id']) {
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
/*Vue.mixin({
	created() {
		// 设置 axios 接口请求 默认基础url
		this.$http.defaults.baseURL = 'https://cnodejs.org/api/v1'
	}
});*/
new Vue({
	el: '#app',
	router,
	store,
	created() {
		store.dispatch('getStoreUser')
	},
	// ...App
	render: h => h(App)
})//.$mount('#app');

