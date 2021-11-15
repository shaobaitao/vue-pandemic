<template>
  <div class="ChinaChart" :id="id" :style="styles"></div>
</template>
<script>
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/visualMap");
require("echarts/lib/chart/map");
require("echarts/lib/component/geo");
import china from 'echarts/map/json/china.json'
export default {
  name: "ChinaChart",
  props: {
    id: {
      type: String,
      default: "ChinaChart",
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
    };
  },
  mounted() {
    setTimeout(() => {
      this.draw();
    }, 500);
  },
  methods: {
    draw() {
      //   let dataList = [
      //     { name: "北京", value: 200 },
      //     { name: "四川", value: 800 },
      //     { name: "江西", value: 1800 },
      //   ]; // 该数据是从服务器获取到的数据
      let dataList = this.chartData;
      console.log(dataList);
      dataList = JSON.parse(
        JSON.stringify(dataList).replace(/value/g, "allValue")
      );
      dataList = JSON.parse(
        JSON.stringify(dataList).replace(/econNum/g, "value")
      );

      let option = {
        title: {
          text: "各省份现存确诊人数",
          left: "center",
          top:"bottom",
          textStyle: {
            color: "#450558",
            textBorderColor: "#d984f3",
            textBorderWidth: "2",
            fontSize: 20,
          },
        },
        tooltip: {
          show: true,
          enterable: false,
          trigger: "item",
          showContent: true,
          formatter: "{b}现存确诊\n{c}例",
          // formatter: function (params) {
          //   return params.name; //自行定义formatter格式
          // },
        },
        visualMap: {
          min: 0,
          max: 150,
          left: "right",
          top: "center",
          // text: ["高", "低"], //取值范围的文字
          inRange: {
            // color: ["#d984f3", "#450558"], //取值范围的颜色
            color: ["#FFF", "#450558"], //取值范围的颜色
          },
          show: false, //图注
        },
        geo: {
          map: "china",
          roam: true, //不开启缩放和平移
          zoom: 1.23, //视角缩放比例
          label: {
            normal: {
              show: true,
              fontSize: "10",
              color: "rgba(0,0,0,0.7)",
              
            },
            emphasis: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
              shadowColor: "#8555a8",
              shadowBlur: 15,
            },
            emphasis: {
              areaColor: "#d984f3", //鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            type: "map",
            geoIndex: 0,
            data: dataList,
          },
        ],
      };
      let mychart = echarts.init(document.getElementById("ChinaChart"));
      mychart.setOption(option);
      mychart.registerMap('china', china)
      this.$nextTick(() => {
        mychart.resize(); // 这里是为了解决，tab刷新的时候，图表不刷新的问题。
      });
    },
  },
};
</script>

<style lang="less" >
</style>
