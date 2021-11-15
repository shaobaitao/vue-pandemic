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
        legend: {
          top: "bottom",
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
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            formatter:function(a,b,c){
16.return c+"%";
17.}
            data: this.conList,
          },
          {
            name: "死亡总数",
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
            name: "治愈总数",
            type: "bar",
            stack: "total",
            label: {
              show: true,
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
</style>
