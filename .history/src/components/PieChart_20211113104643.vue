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
      conturysList: [],
      addList: [],
      topTen: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.draw();
    }, 500);
  },
  methods: {
    initData() {
      this.chartData = this.chartData.reverse(
        this.chartData.sort(this.compare("conadd"))
      );
      this.topTen = this.chartData.slice(0, 10);
      this.topTen = JSON.parse(
        JSON.stringify(this.topTen).replace(/value/g, "allValue")
      );
      this.topTen = JSON.parse(
        JSON.stringify(this.topTen).replace(/conadd/g, "value")
      );
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
        title: {
          text: "世界新增病例",
          left: "center",
          textStyle: {
            color: "#450558",
            textBorderColor: "#d984f3",
            textBorderWidth: "2",
            fontSize: 20,
          },
        },
        color: [
          "#ee22ee",
          "#ee33ee",
          "#ee44ee",
          "#ee55ee",
          "#ee66ee",
          "#ee77ee",
          "#ee88ee",
          "#ee99ee",
          "#eeaaee",
          "#eebbee",
        ],
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
        },
        legend: {
          show: false,
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}\n{c}例",
        },

        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 4,
              borderColor: "#fff",
              borderWidth: 1,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
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
