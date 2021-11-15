<template>
  <div class="BarChart">
    <div :id="id" :style="styles"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer
]);

export default {
  name: "BarChart",
  props: {
    id: {
      type: String,
      default: "chart",
    },
    height: {
      type: String,
    },
    width: {
      type: String,
    },
    data: Object,
  },
  data() {
    return {
        styles:{
            height:this.height,
            width:this.width
        }
    };
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      console.log(echarts);
    },
  },
};
</script>

<style lang="less" >
</style>
