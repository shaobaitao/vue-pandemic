<template>
  <div class="four-container">
    <div class="BarChart" :id="id" :style="styles"></div>
    <div class="fourBorder border1"></div>
    <div class="fourBorder border2"></div>
    <div class="fourBorder border3"></div>
    <div class="fourBorder border4"></div>
  </div>
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
      conturysList: [],
      deathList: [],
      conList: [],
      cureList: [],
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
        this.chartData.sort(this.compare("conNum"))
      );
      this.topTen = this.chartData.slice(0, 10);
      this.topTen.forEach((element) => {
        this.conList.push(element["conNum"]);
        this.deathList.push(element["deathNum"]);
        this.cureList.push(element["cureNum"]);
        this.conturysList.push(element["name"]);
      });
    },
    compare(property) {
      return function (a, b) {
        return a[property] - b[property];
      };
    },
    draw() {
      this.initData();
      　window.onresize=function(){

             myCharts.resize();
        }
      var chartDom = document.getElementById(this.id);
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "世界疫情病例比例累计",
          left: "center",
          textStyle: {
            color: "#450558",
            textBorderColor: "#d984f3",
            textBorderWidth: "2",
            fontSize: 20,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        color: ["#ee44ee", "#8555a8", "#d984f3"],
        legend: {
          top: "bottom",
          textStyle: {
            color: "#d984f3",
          },
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          show: false,
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#d984f3",
            },
          },
        },
        yAxis: {
          type: "category",
          data: this.conturysList,
          inverse: true,
          axisLabel: {
            textStyle: {
              color: "#d984f3",
            },
          },
        },
        series: [
          {
            name: "确诊总数",
            type: "bar",
            stack: "total",
            label: {
              show: false,
            },
            emphasis: {
              focus: "series",
            },
            data: this.conList,
          },
          {
            name: "死亡总数",
            type: "bar",
            stack: "total",
            label: {
              show: false,
            },
            emphasis: {
              focus: "series",
            },
            data: this.deathList,
          },
          {
            name: "治愈总数",
            type: "bar",
            stack: "total",
            label: {
              show: false,
            },
            emphasis: {
              focus: "series",
            },
            data: this.cureList,
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" >
.BarChart {
  box-shadow: inset 1px 1px 16px #ee44ee;
}

.four-container {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background: rgba(75, 139, 247, 0.05);
  box-shadow: 1px 1px 16px #ee44ee inset;
  .fourBorder {
    position: absolute;
    width: 10px;
    height: 10px;
  }
  .border1 {
    left: -1px;
    top: -1px;
    border-left: 2px solid #ee88ee;
    border-top: 2px solid #ee88ee;
  }
  .border2 {
    right: -1px;
    top: -1px;
    border-right: 2px solid #ee88ee;
    border-top: 2px solid #ee88ee;
  }
  .border3 {
    left: -1px;
    bottom: -1px;
    border-left: 2px solid #ee88ee;
    border-bottom: 2px solid #ee88ee;
  }
  .border4 {
    right: -1px;
    bottom: -1px;
    border-right: 2px solid #ee88ee;
    border-bottom: 2px solid #ee88ee;
  }
}
</style>
