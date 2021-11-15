<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-row >
      <el-col :span="24">
        <div class="topBanner">
          <h1>{{ title }}</h1>
          <h3>{{ allData.data.times }}</h3>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4">1</el-col>
      <el-col :span="8">
        <ChinaCard :allData="allData"></ChinaCard>
      </el-col>
      <el-col :span="8">
        <WorldCard :allData="allData"></WorldCard>
      </el-col>
      <el-col :span="4">1</el-col>
    </el-row>


    <el-row>
      <el-col :span="4">1</el-col>
      <el-col :span="8">
          <div id="myChart" :style="{ height: '140px'}"></div> 
      </el-col>
      <el-col :span="8">
        1
      </el-col>
      <el-col :span="4">1</el-col>
    </el-row>
  </div>
</template>

<script>
import ChinaCard from "@/components/ChinaCard";
import WorldCard from "@/components/WorldCard";


export default {
  name: "Home",
  components: {
    ChinaCard,
    WorldCard,
  
  },
  data() {
    return {
      title: "新型冠状病毒疫情数据分析",
      allData: {},
    };
  },
  methods: {
    initData() {
      //  /project/fymap/ncp2020_full_data.json
      //  /news/wap/fymap2020_data.d.json
      this.axios.post("/news/wap/fymap2020_data.d.json").then((response) => {
        this.allData = response.data;
      });

      // const jsonp = require("jsonp");

      // jsonp(
      //   "https://news.sina.com.cn/project/fymap/ncp2020_full_data.json",
      //   null,
      //   (data) => {
      //         this.allData = eval( data);
      //         console.log(this.allData);
      //   }
      // );
   
      // this.$jsonp("https://news.sina.com.cn/project/fymap/ncp2020_full_data.json").then(
      //   json => {
      //       this.allData= json

      //       }).catch(e=>{
      //          console.log(e);
      //       })
    },
     drawLine(){
     // 基于准备好的dom，初始化echarts实例
     let myChart = echarts.init(document.getElementById('myChart'));
     // 绘制图表
     myChart.setOption({
       title: {
         text: '',
         subtext: ''
       },
       tooltip: {
         trigger: 'axis'
       },
       color:['#78d528','#fa7371'],
       legend: {
         data:[
           {
             name:"舒张压",
             textStyle: {
               color:'#78d528'
             }
           },{
             name: "收缩压",
             textStyle: {
               color:'#fa7371'
             }
           }
         ]
       },
       toolbox: {
         show: true,
         feature: {
           dataZoom: {
             yAxisIndex: 'none'
           },
           dataView: {readOnly: false},
           magicType: {type: ['line', 'bar']},
           restore: {},
           saveAsImage: {}
         }
       },
       xAxis:  {
         type: 'category',
         boundaryGap: false,
         data: [
 
           '07:00',
           '08:00',
           '09:00',
           '10:00',
           '11:00',
           '12:00',
           '13:00',
           '14:00',
           '15:00',
           '16:00',
           '17:00',
           ]
       },
       yAxis: {
         type: 'value',
           splitLine: {
             show: true,
             lineStyle:{
               type:'dashed'
             }
             },
         axisLabel: {
           formatter: '{value}'
         }
       },
       series: [
         {
           name:'舒张压',
           type:'line',
           stack: '总量',
           lineStyle:{
             normal:{
               color:'#78d528'
             }
           },
           data:[
             120,
             132,
             101,
             134,
             12,
             45,
             56,
             34,
             76,
             134,
             90,
             230,
             210
           ]
         },
         {
           name:'收缩压',
           type:'line',
           lineStyle:{
             normal:{
               color:'#fa7371'
             }
           },
           stack: '总量',
           data:[
             55,
             32,
             11,
             32,
             12,
             45,
             56,
             34,
             76,
             134,
             90,
             43,
             54
           ]
         },
       ]
     });
  }},

  mounted() {
    this.initData();
  },
};
</script>



<style lang="less">
</style>