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
        this.certainData.push(this.chartData[i].cn_conNum);
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "red", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "blue", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
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
            type: "category",
            boundaryGap: false,
            data: this.dateData,
            inverse: true,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],

        series: [
          {
            name: "确诊病例",
            type: "line",
            areaStyle: {
              color: "#d984f3",
            },
            emphasis: {
              focus: "series",
            },
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
