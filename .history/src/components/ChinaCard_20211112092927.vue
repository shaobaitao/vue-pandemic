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
export default {
  name: "Home",
  data() {
    return {
      title: "新型冠状病毒疫情数据分析",
      allData: {},
    };
  },
  methods: {
    
  },

  mounted() {
    this.initData();
  },
};
</script>
