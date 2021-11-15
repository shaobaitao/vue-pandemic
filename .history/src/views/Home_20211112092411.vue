<template>
  <div class="home">
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-row :gutter="20">
      <el-col :span="4"></el-col>
      <el-col :span="16"><img alt="Vue logo" src="../assets/logo.png" /></el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4"></el-col>
      <el-col :span="16">
        div.ma
        <img alt="Vue logo" src="../assets/logo.png" />
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
    <h1>{{ title }}</h1>
    <h3>{{ allData.data.times }}</h3>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>
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
