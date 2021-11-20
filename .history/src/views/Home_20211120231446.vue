<template>
  <div class="home" v-if="allData.data">
    <el-row>
      <el-col :span="1"></el-col>
      <el-col :span="5">
        <br />
        <chart-border>
          <china-card :allData="allData"></china-card>
        </chart-border>
        <br />
        <chart-border>
          <line-chart :chartData="allData.data.otherhistorylist" height="30vh"></line-chart>
        </chart-border>
        <br />
        <chart-border>
          <pie-chart :chartData="allData.data.otherlist" height="30vh"></pie-chart>
        </chart-border>
      </el-col>
      <el-col :span="12">
        <div class="topBanner">
          <h1>{{ title }}</h1>
          <h3>{{ allData.data.times }}</h3>
        </div>
        <ChinaChart height="85vh" :chartData="allData.data.list"></ChinaChart>
      </el-col>
      <el-col :span="5">
        <br />
        <chart-border>
        <world-card :allData="allData"></world-card>
        <br />
        <chart-border>
        <gradient-line-chart :chartData="allData.data.historylist" height="30vh"></gradient-line-chart>
        <br />
        <chart-border>
        <bar-chart :chartData="allData.data.otherlist" height="30vh"></bar-chart>
      </el-col>
      <el-col :span="1"></el-col>
    </el-row>
  </div>
</template>

<script>
import ChartBorder from "../components/ChartBorder";

import ChinaCard from "@/components/ChinaCard";
import WorldCard from "@/components/WorldCard";
import BarChart from "@/components/BarChart";
import ChinaChart from "@/components/ChinaChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import GradientLineChart from "@/components/GradientLineChart";

export default {
  name: "Home",
  components: {
    ChartBorder,
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
      title: "新型冠状病毒疫情大数据展示系统",
      allData: {},
    };
  },
  methods: {
    initData() {
      this.$jsonp(
        "https://news.sina.com.cn/project/fymap/ncp2020_full_data.json",
        {
          callbackName: "jsonpCallback",
        }
      );
    },
  },
  mounted() {
    this.initData();
    window.jsoncallback = (data) => {
      this.allData = data;
    };
  },
};
</script>

<style lang="less">
.el-col {
  min-height: 1px;
}
.topBanner {
  padding-top: 20px;
  h1 {
    color: #450558;
    -webkit-text-stroke: 1px #d984f3;
  }
  h3 {
    color: #450558;
    -webkit-text-stroke: 1px #d984f3;
  }
}
</style>