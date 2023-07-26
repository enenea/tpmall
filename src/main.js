import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
Vue.use(VueSweetalert2);
