<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-row :gutter="20">
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
      // this.axios.post("/news/wap/fymap2020_data.d.json").then((response) => {
      //   this.allData = response.data;
      // });

      const jsonp = require("jsonp");
      
      jsonp(
        "https://news.sina.com.cn/project/fymap/ncp2020_full_data.json",
        null,
        (data) => {
              this.allData = eval( data);
              console.log(this.allData);
        }
      );

      this.$jsonp
    },
  },

  mounted() {
    this.initData();
  },
};
</script>



<style lang="less">
</style>