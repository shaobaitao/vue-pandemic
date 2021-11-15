<template>
  <div class="BarChart">
    <div :id="id" :style=""></div>
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  name: "BarChart",
  props: {
    id: {
      type: String,
      default: "chart",
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
    return {};
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      console.log(echarts);
    },
  },
};
</script>

<style lang="less" >
</style>
