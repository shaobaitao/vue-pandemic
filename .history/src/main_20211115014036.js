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

const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/title');
require('echarts/lib/component/tooltip');
require("echarts/lib/component/toolbox");
require('echarts/lib/component/grid');
require('echarts/lib/component/visualMap');
require("echarts/lib/component/legend");
require('echarts/lib/chart/line');

const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
require("echarts/lib/chart/map");
require("echarts/lib/component/geo");
Vue.prototype.$echarts = echarts

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
