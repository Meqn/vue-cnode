<template>
<ul class="list">
	<li v-for="item in lists">{{item.title}}</li>
</ul>
</template>

<script>
export default {
	name: 'TopicsList',
	data() {
		return {
			lists: [
				{'title': '第一条信息'},
				{'title': '第二条信息'},
				{'title': '第叁条信息'},
			]
		}
	}
}
</script>