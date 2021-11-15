<template>
  <div class="four-container">
    <div class="LineChart" :id="id" :style="styles"></div>
    <div class="fourBorder border1"></div>
    <div class="fourBorder border2"></div>
    <div class="fourBorder border3"></div>
    <div class="fourBorder border4"></div>
  </div>
</template>

<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
require("echarts/lib/chart/line");

export default {
  name: "LineChart",
  props: {
    id: {
      type: String,
      default: "LineChart",
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
        this.certainData.push(item.certain);
        this.dieData.push(item.die);
        this.recureData.push(item.recure);
        this.dateData.push(item.date);
      });
    },

    draw() {
      this.initData();
      var chartDom = document.getElementById(this.id);
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: "世界确诊病例累计趋势",
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
            type: "cross",
            label: {
              backgroundColor: "#d984f3",
            },
          },
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads"],
        },
        color: ["#ee44ee", "#8555a8", "#d984f3"],
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true,
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
                return value / 100000000 + "亿";
              },
            },
          },
        ],
        series: [
          {
            name: "确诊病例",
            type: "line",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.certainData,
          },
          {
            name: "死亡病例",
            type: "line",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.dieData,
          },
          {
            name: "治愈病例",
            type: "line",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.recureData,
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" >
.four-container {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background: rgba(75, 139, 247, 0.05);
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
