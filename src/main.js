import Vue from 'vue'
import App from './App.vue'
import {Toast} from 'vant'
import router from './router/index'
import store from "./store"
import validate from 'validate.js'


// vant组件toast组件所需样式
import 'vant/lib/toast/style';


// 全局引入validate
Vue.prototype.$validate = validate
Vue.use(Toast)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router,

}).$mount('#app')


