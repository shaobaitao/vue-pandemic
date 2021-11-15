<template>
  <div class="BarChart">
    <div :id="id" style="min-height: 350px;"></div>
  </div>
</template>
<script>
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图
  require('echarts/lib/chart/bar');
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
 
  // import echarts from 'echarts'
 
    export default {
      name: "BarChart",
      // props:['id'],  // 第一种接收父亲传过来的值的方式
      props: {
        height:{
            type:String
        }
        id: {
          type: String,
          default: 'chart'
        }
      },
      data(){
          return {
        
          }
      },
      mounted(){
        this.draw();
      },
      methods:{
        draw(){
          
            
        }
      }
    }
</script>

<style lang="less" >

</style>
