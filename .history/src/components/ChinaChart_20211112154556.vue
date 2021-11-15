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
      //   let dataList = [
      //     { name: "北京", value: 200 },
      //     { name: "四川", value: 800 },
      //     { name: "江西", value: 1800 },
      //   ]; // 该数据是从服务器获取到的数据
      let dataList = this.data;
      let option = {
        tooltip: {
            show:true
          trigger: "item",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
          formatter: function (params) {
            return params.name; //自行定义formatter格式
          },
        },
        visualMap: {
          min: 0,
          max: 1500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], //取值范围的文字
          inRange: {
            color: ["#e0ffff", "#006edd"], //取值范围的颜色
          },
          show: true, //图注
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
            },
            emphasis: {
              areaColor: "#F3B329", //鼠标选择区域颜色
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
            name: "信息量",
            type: "map",
            geoIndex: 0,
            data: dataList,
          },
        ],
      };
      let mychart = echarts.init(document.getElementById("ChinaChart"));
      console.log(mychart);
      mychart.setOption(option);
      this.$nextTick(() => {
        mychart.resize(); // 这里是为了解决，tab刷新的时候，图表不刷新的问题。
      });
    },
  },
};
</script>

<style lang="less" >
</style>
