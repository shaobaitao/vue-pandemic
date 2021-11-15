<template>
  <div class="ChinaCard">
      <h3>全国(含港澳台)</h3>
        <div class="dataTable">
            <span>现存确诊</span>
            <span>现存确诊</span>
            <span>现存确诊</span>
            <span>现存确诊</span>
       
            <span>现存确诊</span>
            <span>现存确诊</span>
            <span>现存确诊</span>
            <span>现存确诊</span>

        </div>


  </div>
</template>

<script>
export default {
  name: "ChinaCard",
  props:{
      allData
  },
  data() {
    return {
      title: "新型冠状病毒疫情数据分析",
    };
  },
  methods: {},

  mounted() {},
};
</script>

<style lang="less">
.dataTable{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>
