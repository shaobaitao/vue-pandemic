<template>
  <div class="ChinaChart" :id="id" :style="styles"></div>
</template>
<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/title');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/visualMap');
require('echarts/lib/chart/map');
require('echarts/lib/component/geo');


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
      tegory",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
              show: true,
            
            l
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
      
      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" >
</style>
