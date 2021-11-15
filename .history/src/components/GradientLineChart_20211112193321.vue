<template>
  <div class="GradientLineChart" :id="id" :style="styles"></div>
</template>
<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/visualMap");
require("echarts/lib/chart/line");

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
      dateData: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.draw();
    }, 500);
  },
  methods: {
    initData() {
      for (let i = 0; i < this.chartData.length; i += 2) {
        this.certainData.push(this.chartData[i].certain);
        this.dateData.push(this.chartData[i].date);
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
            type: "continuous",
            seriesIndex: 0,
            min: 0,
            max: 400,
          },
        ],
        title: [
          {
            left: "center",
            text: "Gradient along the y axis",
          },
        ],
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            data: this.dateData,
          inverse: true

          },
        ],
        yAxis: [{}],
       
        series: [
          {
            type: "line",
            showSymbol: false,
            data: this.certainData,
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" >
</style>
