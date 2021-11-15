<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-row :gutter="20">
      <el-col :span="4">1</el-col>
      <el-col :span="16"
        ><img alt="Vue logo" src="../assets/logo.png"
      /></el-col>
      <el-col :span="4">1</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="topBanner">
          <h1>{{ title }}</h1>
          <h3>{{ allData.data.times }}</h3>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="4">1</el-col>
      <el-col :span="8">
        <img alt="Vue logo" src="../assets/logo.png" />
      </el-col>
      <el-col :span="8">
        <img alt="Vue logo" src="../assets/logo.png" />
      </el-col>
      <el-col :span="4">1</el-col>
    </el-row>
  </div>
</template>

<script>

import ChinaCard from '@/components/ChinaCard'


export default {
  name: "Home",
  components:{
ChinaCard
  }
  data() {
    return {
      title: "新型冠状病毒疫情数据分析",
      allData: {},
    };
  },
  methods: {
    initData() {
      this.axios.post("/news/wap/fymap2020_data.d.json").then((response) => {
        this.allData = response.data;
      });
    },
  },

  mounted() {
    this.initData();
  },
};
</script>



<style lang="less">
</style>