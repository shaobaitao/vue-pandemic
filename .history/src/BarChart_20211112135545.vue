<template>
  <div class="BarChart">
    <div :id="id" style="min-height: 350px"></div>
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
    draw() {},
  },
};
</script>

<style lang="less" >
</style>
