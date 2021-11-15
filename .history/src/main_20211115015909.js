import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { VueJsonp } from 'vue-jsonp'
import {
  Row, Col
} from 'element-ui';



Vue.use(Row);
Vue.use(Col);
Vue.use(VueJsonp);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
