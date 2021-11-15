<template>
  <div class="GradientLineChart" :id="id" :style="styles"></div>
</template>
<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/title');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/grid');
require('echarts/lib/component/visualMap');
require('echarts/lib/chart/line');

export default {
  name: "GradientLineChart",
  props: {
    id: {
      type: String,
      default: "GradientLineChart",
    },
    height: {
      type: String,
    },
    width: {
      type: String,
    },
    chartData: Array,
  },
  data() {
    return {
      styles: {
        height: this.height,
        width: this.width,
      },
      certainData: [],
      dieData: [],
      recureData: [],
      dateData:[],
    };
  },
  mounted() {
    setTimeout(() => {
      this.draw();
    }, 500);
  },
  methods: {
    initData() {
        
        for(let i=0;i<this.chartData.length;i+=2){
            this.certainData.push(this.chartData[i].certain)
            this.dateData.push(this.chartData[i].date)
        }
    },

    draw() {
      this.initData();
      console.log(this.chartData);
      var chartDom = document.getElementById(this.id);
      var myChart = echarts.init(chartDom);
      var option;

      option = {
  // Make gradient line here
  visualMap: [
    {
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: 400
    },
    {
      show: false,
      type: 'continuous',
      seriesIndex: 1,
      dimension: 0,
      min: 0,
      max: this.dateData.length - 1
    }
  ],
  title: [
    {
      left: 'center',
      text: 'Gradient along the y axis'
    },
    {
      top: '55%',
      left: 'center',
      text: 'Gradient along the x axis'
    }
  ],
  tooltip: {
    trigger: 'axis'
  },
  xAxis: [
    {
      data: this.dateData
    },
    {
      data: this.dateData,
      gridIndex: 1
    }
  ],
  yAxis: [
    {},
    {
      gridIndex: 1
    }
  ],
  grid: [
    {
      bottom: '60%'
    },
    {
      top: '60%'
    }
  ],
  series: [
    {
      type: 'line',
      showSymbol: false,
      data: this.certainData
    },
    {
      type: 'line',
      showSymbol: false,
      data: this.certainData,
      xAxisIndex: 1,
      yAxisIndex: 1
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
