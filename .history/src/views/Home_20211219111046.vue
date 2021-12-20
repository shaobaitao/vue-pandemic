<template>
  <div class="home" v-if="allData.data">
    <div class="topBanner">
      <h1>{{ title }}</h1>
      <h3>{{ allData.data.times }}</h3>
    </div>
    <chart-border class="charts">
      <china-card :allData="allData"></china-card>
    </chart-border>
    <chart-border class="charts">
      <line-chart :chartData="allData.data.otherhistorylist"></line-chart>
    </chart-border>
    <chart-border class="charts">
      <pie-chart :chartData="allData.data.otherlist"></pie-chart>
    </chart-border>

    <ChinaChart class="chinaChart charts" :chartData="allData.data.list"></ChinaChart>
    <chart-border class="charts">
      <world-card :allData="allData"></world-card>
    </chart-border>
    <chart-border class="charts">
      <gradient-line-chart :chartData="allData.data.historylist"></gradient-line-chart>
    </chart-border>
    <chart-border class="charts">
      <bar-chart :chartData="allData.data.otherlist"></bar-chart>
    </chart-border>
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
.home {
  width: calc(100vw - 60px);
  height: calc(100vh - 60px);
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-flow: column dense;
  gap: 10px;

  grid-template-areas:
    ". cc ."
    ". cc ."
    ". cc .";
}

@media screen and (max-width: 700px) {
  .home {
    width: calc(100vw - 60px);
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-auto-flow: column dense;
    gap: 10px;
    grid-template-areas:
      "."
      "cc"
      "."
      "."
      "."
      "."
      "."
      "."
      ".";
  }
  .topBanner {
    margin-bottom: 100px;
  }
  .charts {
    min-height: 300px;
  }
  .chinaChart {
    height: 500px;
  }
}
.chinaChart {
  grid-area: cc;
}

.topBanner {
  position: absolute;
  width: calc(100% - 60px);
  text-align: center;
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