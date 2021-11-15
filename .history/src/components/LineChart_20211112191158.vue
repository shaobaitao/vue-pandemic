<template>
  <div class="LineChart" :id="id" :style="styles"></div>
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
            this.dieData.push(this.chartData[i].die)
            this.recureData.push(this.chartData[i].recure)
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
        title: {
          text: "Stacked Area Chart",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            data: this.dateData,
            inverse: true
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            // data: [120, 132, 101, 134, 90, 230, 210],
            data: this.certainData,

          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.dieData,
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: this.recureData,
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
