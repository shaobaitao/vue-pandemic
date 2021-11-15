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
rts-website@as
          visual
        };
        myChart.setOption(option);
        option && myChart.setOption(option);
      });

      
    },
  },
};
</script>

<style lang="less" >
</style>
