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
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

Vue.use(Row);
Vue.use(Col);
Vue.use(VueJsonp);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  echarts,
  render: h => h(App)
}).$mount('#app')
