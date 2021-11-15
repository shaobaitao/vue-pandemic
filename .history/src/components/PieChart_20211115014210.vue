<template>
<div class="four-container">
  <div class="PieChart" :id="id" :style="styles"></div>
    <div class="fourBorder border1"></div>
    <div class="fourBorder border2"></div>
    <div class="fourBorder border3"></div>
    <div class="fourBorder border4"></div>
  </div>
</template>
<script>

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
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "世界新增病例前几国家",
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
.PieChart{
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
