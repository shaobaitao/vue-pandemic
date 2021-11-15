<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "新型冠状病毒疫情数据分析",
    };
  },
  mounted() {
    this.axios.post("/news/wap/fymap2020_data.d.json").then((response) => {

      console.log(response.data);
    });
  },
};
</script>
