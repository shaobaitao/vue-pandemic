<template>
  <div class="home" v-if="">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-row>
      <el-col :span="24">
        <div class="topBanner">
          <h1>{{ title }}</h1>
          <h3 v-text="allData.data.times"></h3>
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
        <div class="charts">
          <div ref="barGraph" style="height: 350px"></div>
        </div>

        <div class="charts">
          <div ref="pieGraph" style="height: 350px"></div>
        </div>
      </el-col>
      <el-col :span="8"> 1 </el-col>
      <el-col :span="4">1</el-col>
    </el-row>
  </div>
</template>

<script>
import ChinaCard from "@/components/ChinaCard";
import WorldCard from "@/components/WorldCard";

let echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入柱状图
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
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
    drawBar() {
      // 基于dom，初始化echarts实例
      let barGraph = echarts.init(this.$refs.barGraph);
      // 绘制图表
      barGraph.setOption({
        title: {
          text: "全年产量趋势图",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        legend: {
          left: "center",
          data: ["本年", "上年"],
          bottom: 0,
        },
        xAxis: {
          type: "category",
          name: "x",
          splitLine: { show: false },
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "8%",
          containLabel: true,
        },
        yAxis: {
          type: "category",
          name: "y",
          splitLine: { show: true },
          data: [
            "10%",
            "20%",
            "30%",
            "40%",
            "50%",
            "60%",
            "70%",
            "80%",
            "90%",
            "100%",
          ],
        },
        series: [
          {
            name: "本年",
            type: "line",
            data: [
              0.8, 0.98, 0.96, 0.27, 0.81, 0.47, 0.74, 0.23, 0.69, 0.25, 0.36,
              0.56,
            ],
          },
          {
            name: "上年",
            type: "line",
            data: [
              1, 0.2, 0.4, 0.8, 0.16, 0.32, 0.64, 1.28, 5.6, 0.25, 0.63, 0.65,
              0.12,
            ],
          },
        ],
      });
    },
    drawPie() {
      let pieGraph = echarts.init(this.$refs.pieGraph);
      pieGraph.setOption({
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          x: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },

  mounted() {
    this.initData();
    this.drawBar();
    this.drawPie();
  },
};
</script>



<style lang="less">
</style>