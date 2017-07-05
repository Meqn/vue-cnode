/**
 * Vue 滚动到某处 插件
 * 
 * 参考：
 * Vue-Router、vue-scrollto[//github.com/rigor789]
 * 
 * 用法：
 * 
 * 1. 引入文件
 *    1.1  Vue.use(VueScrollTo, options)    // options 设置全局默认选项
 *    1.2  VueScrollTo.setDefaults(options)   // 设置全局默认选项, 也可在组件中设置
 * 
 * 2. 调用
 *    2.1 指令
 *      2.1.1  <button v-scroll-to="'#topic-comments'"></button>
 *      2.1.2  <button v-scroll-to="{el: '#topic-comments', offset: -60}"></button>
 * 
 *    2.2 函数调用
 *      2.2.1  this.$scrollTo(target, options)
 *      2.2.2  import 'VueScrollTo'
 *              VueScrollTo.scrollTo(target, options)
 * 
 */

(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else {
    global['vue-scrollto'] = factory()
  }
}(this, function () { 'use strict';

  let Util = {
    $$ (selector) {
      if(typeof selector === 'string') {
        return document.querySelector(selector)
      }
      return selector;
    },
    on (el, evt, handler) {
      this.$$(el).addEventListener(evt, handler)
    },
    off (el, evt, handler) {
      this.$$(el).removeEventListener(evt, handler)
    }
  }

  
  let defaults = {
    container: 'body',
    duration: 1000,
    offset: 0,
    onDone: null
  }
  function setDefaults(options) {
    defaults = Object.assign({}, defaults, options)
  }

  function scrollTo(target, options = {}) {
    let opts = Object.assign({}, defaults, options);
    console.log('... scrollTo ... ', opts)
    let {container, offset, onDone} = opts
    let $target = Util.$$(target)
    if (!$target) {
      return console.warn('[vue-scrollto warn]: element is not on the page: '+ target)
    }
    let $container = Util.$$(container)
    let targetY = $target.offsetTop - $container.offsetTop + offset
    container === 'body' ? window.scrollTo(0, targetY) : $container.scrollTop = targetY
    onDone && onDone()
  }

  /**
   * directive start
   */
  let bindings = []     // store binding data
  function removeBinding (el) {
    bindings.forEach((v, i) => {
      if (v.el == el) {
        bindings.splice(i, 1)
        return true
      }
    })
    return false
  }
  function getBinding (el) {
    let binding = bindings.find(v => v.el == el)
    if (binding) return binding;
    bindings.push(binding = {
      el: el,
      binding: {}
    })
    return binding;
  }

  function handleClick(event) {
    event.preventDefault()
    let ctx = getBinding(this).binding
    if (typeof ctx.value === 'string') {
      return scrollTo(ctx.value)
    }
    let opts = Object.assign({}, defaults, ctx.value);
    scrollTo(opts.el, opts)
  }
  /**
   * directive end
   */

  let Plugin = {
    bind(el, binding) {
      getBinding(el).binding = binding
      Util.on(el, 'click', handleClick)
      console.log('绑定 ..., ',Plugin)
    },
    unbind(el, binding) {
      removeBinding(el)
      Util.off(el, 'click', handleClick)
      console.log('解绑 ..., ',Plugin)
    },
    update(el, binding) {
      getBinding(el).binding = binding
      console.log('更新 ..., ',Plugin)
    },
    scrollTo,
    bindings,
    setDefaults
  }


  function install(Vue, options) {
    // 阻止注册多次
    if (install.installed) { return }
    install.installed = true
    // 设置默认选项
    if(options) setDefaults(options)
    // 添加全局资源
    Vue.directive('scroll-to', Plugin)
    // 添加实例方法
    Vue.prototype.$scrollTo = Plugin.scrollTo
  }
  // 插件公开 install 方法
  Plugin.install = install
  Plugin.version = '0.1.0'
  if(window.Vue) {
    window.Vue.use(Plugin)
  }

  return Plugin
}))


