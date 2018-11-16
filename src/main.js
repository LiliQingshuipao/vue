// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview'
import './plugs/'
import 'iview/dist/styles/iview.css'
import './cube/components'
import "./less/app.less"
import $ from 'jquery'
import Less from 'less'
import './components/';
window.$ = $;
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(iView)
/* eslint-disable no-new */
router.beforeEach((to,from,next) => {

  iView.LoadingBar.start()
  next()
})
router.afterEach((to,from) => {
  iView.LoadingBar.finish()
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
