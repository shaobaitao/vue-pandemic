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
    initData() {
      //  /project/fymap/ncp2020_full_data.json
      //  /news/wap/fymap2020_data.d.json
      this.axios.post("/news/wap/fymap2020_data.d.json").then((response) => {
        this.allData = response.data;
      });
      this.axios.post("、project/fymap/ncp2020_full_data.json").then((response) => {
        this.allData = Promise.resolve(response)
        log
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

      // jsonp(
      //   "https://news.sina.com.cn/project/fymap/ncp2020_full_data.json",
      //   null,
      //   (err, data) => {
      //     if (err) {
      //       console.error(err.message);
      //     } else {
      //       console.log(111);
      //       if (data.list.length > 0) {
      //         console.log(222);
      //         data.list.map((item) => this.list.push(item));
      //         console.log(data);
      //       }
      //       console.log(333);
      //     }
      //   }
      // );
    },
  },
  computed: {},
  mounted() {
    this.initData();
  },
};
</script>



<style lang="less">
</style>