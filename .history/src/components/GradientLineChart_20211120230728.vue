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
      this.draw();
  },
  methods: {
    initData() {
      this.chartData.forEach((item) => {
        this.certainData.push(item.cn_conNum);
        this.dateData.push(item.date);
      })
    },

    draw() {
      this.initData();
      var chartDom = document.getElementById(this.id);
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: "中国确诊病例累计趋势",
          left: "center",
          textStyle: {
            color: "#450558",
            textBorderColor: "#d984f3",
            textBorderWidth: "2",
            fontSize: 20,
          },
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
        },
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
              backgroundColor: "#d984f3",
            },
          },
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.dateData,
            inverse: true,
            axisLabel: {
              textStyle: {
                color: "#d984f3",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#d984f3",
              },
              formatter: (value) => {
                return value / 10000 + "万";
              },
            },
          },
        ],

        series: [
          {
            name: "确诊病例",
            type: "line",
            areaStyle: {
              color: "#450558",
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#d984f3",
                },
                color: "#d984f3",
              },
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
