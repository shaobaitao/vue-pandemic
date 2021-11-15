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
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
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
