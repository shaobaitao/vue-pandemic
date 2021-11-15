<template>
  <div class="home" v-if="allData.data">
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
      <el-col :span="1">1</el-col>
      <el-col :span="6">
        <ChinaCard :allData="allData"></ChinaCard>
        <br />
        <BarChart height="30vh"></BarChart>
        <br />
        
      </el-col>
      <el-col :span="10">
        <ChinaChart height="60vh" :data="allData.data.list"></ChinaChart>
      </el-col>
      <el-col :span="6">
        <WorldCard :allData="allData"></WorldCard>
        <br />
        <barGraph height="30vh"></barGraph>
        <br />
        <LineChart height="30vh"></LineChart>
      </el-col>
      <el-col :span="1">1</el-col>
    </el-row>
  </div>
</template>

<script>
import ChinaCard from "@/components/ChinaCard";
import WorldCard from "@/components/WorldCard";
import barGraph from "@/components/barGraph";

import BarChart from "@/BarChart";
import ChinaChart from "@/components/ChinaChart";
import LineChart from "@/components/LineChart";
export default {
  name: "Home",
  components: {
    ChinaCard,
    WorldCard,
    barGraph,
    BarChart,
    ChinaChart,
    LineChart,
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
        // setTimeout(() => {
        //   this.drawBar();
        //   this.drawPie();
        // }, 500);
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
  },

  mounted() {
    this.initData();
  },
};
</script>



<style lang="less">
</style>