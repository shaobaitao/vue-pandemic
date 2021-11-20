<template>
  <div class="home" v-if="allData.data">
    <el-row>
      <el-col :span="1"></el-col>
      <el-col :span="5">
        <br/>
        <ChinaCard :allData="allData"></ChinaCard>
        <br/>
        <LineChart
          :chartData="allData.data.otherhistorylist"
          height="30vh"
        ></LineChart>
        <br/>
        <PieChart :chartData="allData.data.otherlist" height="30vh"></PieChart>
      </el-col>
      <el-col :span="12">
        <div class="topBanner">
          <h1>{{ title }}</h1>
          <h3>{{ allData.data.times }}</h3>
        </div>
        <ChinaChart height="85vh" :chartData="allData.data.list"></ChinaChart>
      </el-col>
      <el-col :span="5">
        <br/>
        <WorldCard :allData="allData"></WorldCard>
        <br/>
        <GradientLineChart
          :chartData="allData.data.historylist"
          height="30vh"
        ></GradientLineChart>
        <br/>
        <BarChart :chartData="allData.data.otherlist" height="30vh"></BarChart>
      </el-col>
      <el-col :span="1"></el-col>
    </el-row>
  </div>
</template>

<script>
import Chart

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
  min-height: 1px
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