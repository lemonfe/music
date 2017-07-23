import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

fastclick.attach(document.body)  //消除点击300ms延迟

Vue.use(VueLazyLoad,{
	loading: require('common/images/default.png')
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
