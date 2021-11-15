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
    drawLine() {
      // var i=0;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      var color = ["#19D672", "#FD517D"];
      // 绘制图表
      myChart.setOption({
        color: ["#23D864", "#FF4D51"],

        // title: { text: '伦敦金' },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        legend: [
          {
            // orient: "vertical",
            itemWidth: 15,
            x: "2%",
            y: "20%",

            textStyle: {
              // color: '#ccc',
            },

            data: ["买跌"]
          },
          {
            itemWidth: 15,

            // orient: "vertical",
            x: "80%",
            y: "20%",
            data: ["买涨"]
          }
        ],
        series: [
          {
            name: "访问来源",
            type: "pie",
            data: ["20%", "80%"],
            radius: ["42%", "50%"],
            center: ["50%", "35%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "0",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },

            itemStyle: {
              top: "50"

              // borderWidth: 50, //设置border的宽度有多大
            },

            data: [
              {
                value: this.percent1,
                name: "买跌",
                a: "1"
              },
              {
                value: this.percent2,
                name: "买涨",
                a: "1"
              }
            ]
          }
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