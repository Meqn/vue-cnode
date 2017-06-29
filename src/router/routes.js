
import Topics from '@pages/topics'
import Detail from '@pages/detail'
import Me from '@pages/my'
import Favorite from '@pages/favorite'
import Messages from '@pages/messages'
import MyTopics from '@pages/my-topics'
import Post from '@pages/post'
import Login from '@pages/login'

export default [{
		path: '/',
		redirect: {name: 'topics'}
	},
	{
		path: '/topics',
		name: 'topics',
		component: Topics,
		meta: {
			title: 'topics',
			toolBarLeft: 'menu'
		}
	},
	{
		path: '/topic',
		redirect: {name: 'topics'}
	},
	{
		path: '/topic/:id',
		name: 'detail',
		component: Detail,
		meta: {
			title: '主题',
			toolBarLeft: 'return',
			menuBottom: 'hide'
		}
	},
	{
		path: '/favorite/',
		name: 'favorite',
		component: Favorite,
		meta: {
			title: '我的收藏',
			toolBarLeft: 'none',
			requiresAuth: true
		}
	},
	{
		path: '/messages',
		name: 'messages',
		component: Messages,
		meta: {
			title: '消息',
			toolBarLeft: 'none',
			requiresAuth: true
		}
	},
	{
		path: '/my',
		name: 'me',
		component: Me,
		meta: {
			title: '个人中心',
			toolBarLeft: 'none'
		}
	},
	{
		path: '/my/topics/',
		name: 'myTopics',
		component: MyTopics,
		meta: {
			title: '我的主题',
			toolBarLeft: 'none',
			requiresAuth: true
		}
	},
	{
		path: '/post',
		name: 'post',
		component: Post,
		meta: {
			title: '新话题',
			toolBarLeft: 'none',
			toolBarRight: 'none',
			bgcolor: '#fff',
			requiresAuth: true
		}
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {
			title: '登录',
			toolBarLeft: 'return',
			bgcolor: '#fff'
		}
	}
]
