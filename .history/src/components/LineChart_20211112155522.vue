<template>
  <div class="LineChart" :id="id" :style="styles"></div>
</template>
<script>

const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/grid');
require('echarts/lib/chart/line');
export default {
  name: "LineChart",
  props: {
    id: {
      type: String,
      default: "LineChart",
    },
    data: Object,
  },
  data() {
    return {
      
    };
  },
  mounted() {
    setTimeout(() => {
      this.draw();
    }, 500);
  },
  methods: {
    draw() {
      var chartDom = document.getElementById(this.id);
      
        },
        
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
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
