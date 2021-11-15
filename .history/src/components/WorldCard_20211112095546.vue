<template>
  <div class="WorldCard">

      <h3>海外</h3>
    <div class="dataTable">
      <span class="tableSpan">现存确诊</span>
      <span class="tableSpan">累计境外输入</span>
      <span class="tableSpan">现存无症状</span>


      <span class="tableSpan">{{ allData.data.othertotal.certain }}</span>
      <span class="tableSpan">{{ allData.data.othertotal.die }}</span>
      <span class="tableSpan">{{ allData.data.othertotal.recure }}</span>

     
    </div>
  </div>
</template>

<script>
export default {
  name: "WorldCard",
  props:{
      allData:Object
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
.tableSpan{
    width: calc(100%/3);
}
</style>
