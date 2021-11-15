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

      // const jsonp = require("jsonp");

      // jsonp(
      //   "https://news.sina.com.cn/project/fymap/ncp2020_full_data.json",
      //   null,
      //   (data) => {
      //         this.allData = eval( data);
      //         console.log(this.allData);
      //   }
      // );
var ajax = new XMLHttpRequest();
//步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
ajax.open('get','getStar.php?starName='+name);
//步骤三:发送请求
ajax.send();
//步骤四:注册事件 onreadystatechange 状态改变就会调用
ajax.onreadystatechange = function () {
   if (ajax.readyState==4 &&ajax.status==200) {
    //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
　　　　console.log(ajax.responseText);//输入相应的内容
  　　}
}
      this.$jsonp("https://news.sina.com.cn/project/fymap/ncp2020_full_data.json").then(
        json => {
            this.allData= json
          
            }).catch(e=>{
               console.log(e);
            })


           

    },
  },

  mounted() {
    this.initData();
  },
};
</script>



<style lang="less">
</style>