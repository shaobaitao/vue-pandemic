import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'



import {VueJsonp} from 'vue-jsonp'

// import * as echarts from 'echarts'
// Vue.prototype.$echarts = echarts
// import china from 'echarts/map/json/china.json' // 引入json文件
// echarts.registerMap('china', china) // 在echarts中注册使用这个文件

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
