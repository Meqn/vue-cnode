<template>
  <div class="topic-comments-item">
    <div class="mdui-list mdui-list-default mdui-list-dense">
      <div class="mdui-list-item">
        <div class="mdui-list-item-avatar">
          <img :src="item.author && item.author['avatar_url']">
        </div>
        <div class="mdui-list-item-content w100">
          <div class="mdui-list-item-title" v-text="item.author && item.author['loginname']"></div>
          <div class="mdui-list-item-text font12">发布于5天前</div>
        </div>
        <div class="g-flex g-flex-middle mdui-text-color-grey topic-comments-action">
          <i class="mdui-icon material-icons up" :class="{'mdui-text-color-theme-accent': item.is_uped}">&#xe8dc;</i>
          <span class="up-count" v-show="upCount(item.ups) > 0" v-text="upCount(item.ups)"></span>
          <i class="mdui-icon material-icons" @click="reply()">&#xe15e;</i>
        </div>
      </div>
    </div>
    <div class="topic-comments-content" v-html="item.content"></div>
    <div class="topic-comments-reply" v-if="isreply">
      <textarea cols="30" rows="4" class="mdui-textarea"></textarea>
      <div class="tar mdui-m-t-1">
        <button class="mdui-btn mdui-ripple mdui-btn-dense mdui-color-theme-accent">回复</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isreply: false
    }
  },
  props: ['item'],
  methods: {
    upCount(ups) {
			return Array.isArray(ups) ? ups.length : 0
		},
    reply() {
      this.isreply = !this.isreply
    }
  }
}
</script>
