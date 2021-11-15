<template>
  <div class="PieChart" :id="id" :style="styles"></div>
</template>
<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/legend");
require("echarts/lib/chart/pie");

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
    chartData: Array,
  },
  data() {
    return {
      styles: {
        height: this.height,
        width: this.width,
      },
      conturysList:[],
      addList:[],
      topTen:[]
    };
  },
  mounted() {
    setTimeout(() => {
      this.draw();
    }, 500);
  },
  methods: {
    initData() {
      this.chartData = this.chartData.reverse(this.chartData.sort(this.compare("conadd")));
      this.topTen=this.chartData.slice(0,10)
      console.log(this.topTen);
      this.topTen.forEach(element => {
        this.addList.push(element["conNum"])
        this.conturysList.push(element["name"])
      });

    },
    compare(property) {
      return function (a, b) {
        return a[property] - b[property];
      };
    },
    draw() {
      var chartDom = document.getElementById(this.id);
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [20, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: this.topTen,
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
