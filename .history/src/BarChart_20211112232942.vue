<template>
  <div class="BarChart" :id="id" :style="styles"></div>
</template>
<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
require("echarts/lib/chart/bar");

export default {
  name: "BarChart",
  props: {
    id: {
      type: String,
      default: "BarChart",
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
      conturysList:[],
      deathList:[],
      conList:[],
      newList:[],
      topTen:{}
    };
  },
  mounted() {
    setTimeout(() => {
      this.draw();
    }, 500);
  },
  methods: {
    initData() {
      this.chartData.splice(0, 1);
      this.chartData = this.chartData.reverse(this.chartData.sort(this.compare("conNum")));
      this.topTen=this.chartData[0,10]
      console.log(this.chartData);
      this.topTen.forEach(element => {
        this.conList.push(element["conNum"])
        this.deathList.push(element["deathNum"])
        this.newList.push(element["conadd"])
        this.conturysList.push(element["name"])
      });

    },
    compare(property) {
      return function (a, b) {
        return a[property] - b[property];
      };
    },
    draw() {
      this.initData();
      var chartDom = document.getElementById(this.id);
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: this.conturysList,
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: this.conList,
          },
          {
            name: "Mail Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: this.deathList,
          },
          {
            name: "Affiliate Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: this.newList,
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
