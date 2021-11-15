<template>
  <div class="PieChart" :id="id" :style="styles"></div>
</template>
<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');
require('echarts/lib/chart/pie');

export default {
  name: "PieChart",
  props: {
    id: {
      type: String,
      default: "PieChart",
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
      styles: {
        height: this.height,
        width: this.width,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.draw();
    }, 500);
  },
  methods: {
    draw() {
      var chartDom = document.getElementById(this.id);
      var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }
  ]
};

option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" >
</style>
