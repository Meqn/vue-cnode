
import Topics from '@components/topics'
import topicslist from '@components/topics'
import TopicView from '@pages/topic'
import Me from '@pages/my'
import Messages from '@pages/messages'
import myTopics from '@pages/my-topics'
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
		path: '/topic/:id',
		name: 'topicView',
		component: TopicView,
		meta: {
			title: '主题',
			toolBarLeft: 'return',
			menuBottom: 'hide'
		}
	},
	{
		path: '/favorite/',
		name: 'favorite',
		component: Topics,
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
		}
	},
	{
		path: '/my',
		name: 'me',
		component: Me,
		meta: {
			title: '个人',
			toolBarLeft: 'none',
			requiresAuth: true
		}
	},
	{
		path: '/my/topics/',
		name: 'myTopics',
		component: myTopics,
		meta: {
			title: '我的主题',
			toolBarLeft: 'none',
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
