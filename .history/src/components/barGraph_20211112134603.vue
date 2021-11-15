<template>
  <div class="ChinaCard">
    <h3>全国(含港澳台)</h3>
    <div class="chinaDataTable">
      <span class="chinaDableSpan">现存确诊</span>
      <span class="chinaDableSpan">累计境外输入</span>
      <span class="chinaDableSpan">现存无症状</span>
      <span class="chinaDableSpan">现存重症确诊</span>

  </div>
</template>

<script>
export default {
  name: "barGraph",
  props: {
    allData: Object,
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

<style lang="less" >

</style>
