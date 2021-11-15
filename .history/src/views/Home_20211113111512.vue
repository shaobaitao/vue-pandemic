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
      <el-col :span=""></el-col>
      <el-col :span="6">
        <ChinaCard :allData="allData"></ChinaCard>
        <br />
        <LineChart
          :chartData="allData.data.otherhistorylist"
          height="30vh"
        ></LineChart>

        <br />
        <PieChart :chartData="allData.data.otherlist" height="30vh"></PieChart>
      </el-col>
      <el-col :span="12">
        <ChinaChart height="90vh" :chartData="allData.data.list"></ChinaChart>
      </el-col>
      <el-col :span="6">
        <WorldCard :allData="allData"></WorldCard>
        <br />
        <GradientLineChart
          :chartData="allData.data.historylist"
          height="30vh"
        ></GradientLineChart>
        <br />
        <BarChart :chartData="allData.data.otherlist" height="30vh"></BarChart>
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
      title: "新型冠状病毒疫情大数据展示",
      allData: {},
    };
  },
  methods: {
    getJson() {
      this.$jsonp(
        "https://news.sina.com.cn/project/fymap/ncp2020_full_data.json",
        {
          callbackQuery: "callbackParam",
          callbackName: "jsoncallback",
        }
      ).then((json) => {
        // 返回的jsonp数据不会放这里，而是在 window.jsonpCallback
        console.log(json);
      });
    },
    initData() {
      this.$jsonp(
        "https://news.sina.com.cn/project/fymap/ncp2020_full_data.json",
        {
          callbackQuery: "callbackParam",
          callbackName: "jsonpCallback",
        }
      ).then((res) => {
        console.log(res);
      });
    },
  },
  computed: {},
  mounted() {
    this.getJson();
    window.jsoncallback = (data) => {
      this.allData = data;
    };
  },
};
</script>

<style lang="less">
</style>