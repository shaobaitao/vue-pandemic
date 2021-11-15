<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-row>
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
        <div id="myChart" :style="{ height: '200px' }"></div>
      </el-col>
      <el-col :span="8"> 1 </el-col>
      <el-col :span="4">1</el-col>
    </el-row>
  </div>
</template>

<script>
import ChinaCard from "@/components/ChinaCard";
import WorldCard from "@/components/WorldCard";
import * as echarts from "echarts";
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
    draw() {
      var chartDom = document.getElementById("myChart");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "Mail Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Affiliate Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "Search Engine",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },

  mounted() {
    this.initData();
    this.draw();
  },
};
</script>



<style lang="less">
</style>