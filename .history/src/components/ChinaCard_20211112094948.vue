<template>
  <div class="ChinaCard">
      <h3>全国(含港澳台)</h3>
        <div class="dataTable">
            <span class="tableSpan">现存确诊</span>
            <span class="tableSpan">累计境外输入</span>
            <span class="tableSpan">现存无症状</span>
            <span class="tableSpan">现存重症确诊</span>
            
            <span class="tableSpan">{{allData.data.econNum}}</span>
            <span class="tableSpan">{{allData.data.econNum}}</span>
            <span class="tableSpan">{{allData.data.econNum}}</span>
            <span class="tableSpan">{{allData.data.econNum}}</span>
            
            <span class="tableSpan">累计确诊</span>
            <span class="tableSpan">累计死亡</span>
            <span class="tableSpan">累计治愈</span>
            <span class="tableSpan">现存疑似</span>

            <span class="tableSpan">{{allData.data.econNum}}</span>
            <span class="tableSpan"></span>
            <span class="tableSpan"></span>
            <span class="tableSpan"></span>

           

        </div>


  </div>
</template>

<script>
export default {
  name: "ChinaCard",
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
    width: 25%;
}
</style>
