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
      <el-col :span="6">
        <ChinaCard :allData="allData"></ChinaCard>
        <br />
        <LineChart
          :chartData="allData.data.otherhistorylist"
          height="30vh"
        ></LineChart>

        <br />
        <pie-chart height="30vh"></pie-chart>
      </el-col>
      <el-col :span="12">
        <ChinaChart height="60vh" :chartData="allData.data.list"></ChinaChart>
      </el-col>
      <el-col :span="6">
        <WorldCard :allData="allData"></WorldCard>
        <br />
        <GradientLineChart
          :chartData="allData.data.historylist"
          height="30vh"
        ></GradientLineChart>
        <br />
        <BarChart height="30vh"></BarChart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChinaCard from "@/components/ChinaCard";
import WorldCard from "@/components/WorldCard";

import BarChart from "@/BarChart";
import ChinaChart from "@/components/ChinaChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";

import GradientLineChart from "@/components/GradientLineChart";
export default {
  name: "Home",
  components: {
    ChinaCard,
    WorldCard,

    BarChart,
    ChinaChart,
    LineChart,
    PieChart,
    GradientLineChart,
  },
  data() {
    return {
      title: "新型冠状病毒疫情数据分析",
      allData: {},
    };
  },
  methods: {
    myJsonp() {
      var url = "https://news.sina.com.cn/project/fymap/ncp2020_full_data.json?callback=jsoncallback";
      let domScript = document.createElement("script");
      domScript.src = url;
      domScript.type = "text/javascript";
      document.getElementsByTagName("body")[0].appendChild(domScript);
      window["initData"] = this.initData;
    },

    initData(response) {
      //  /project/fymap/ncp2020_full_data.json
      //  /news/wap/fymap2020_data.d.json
      // this.axios.post("/news/wap/fymap2020_data.d.json").then(function(response){
      //   this.allData = response.data;
      // });
      this.allData = response.data;
    },

    // var _this = this;
    // $.ajax({
    //   url: "https://news.sina.com.cn/project/fymap/ncp2020_full_data.json",
    //   dataType: "jsonp",
    //   jsonpCallback: "jsoncallback",
    //   async : false ,
    //   success: function (res) {
    //     //1、获取数据
    //     _this.allData = res.data;
    //   },
    // });
  },
  computed: {},
  mounted() {
    this.myJsonp()
  },
  
};
</script>



<style lang="less">
</style>