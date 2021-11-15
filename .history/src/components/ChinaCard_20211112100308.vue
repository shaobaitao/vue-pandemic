<template>
  <div class="ChinaCard">
    <h3>全国(含港澳台)</h3>
    <div class="chinaDataTable">
      <span class="chinaDableSpan">现存确诊</span>
      <span class="chinaDableSpan">累计境外输入</span>
      <span class="chinaDableSpan">现存无症状</span>
      <span class="chinaDableSpan">现存重症确诊</span>

      <span class="chinaDableSpan">{{ allData.data.econNum }}</span>
      <span class="chinaDableSpan">{{ allData.data.jwsrNum }}</span>
      <span class="chinaDableSpan">{{ allData.data.asymptomNum }}</span>
      <span class="chinaDableSpan">{{ allData.data.heconNum }}</span>

      <span class="chinaDableSpan">较昨日{{ allData.data.add_daily.addecon_new }}</span>
      <span class="chinaDableSpan">较昨日{{ allData.data.jwsrNum }}</span>
      <span class="chinaDableSpan">较昨日{{ allData.data.asymptomNum }}</span>
      <span class="chinaDableSpan">较昨日{{ allData.data.heconNum }}</span>

      <span class="chinaDableSpan">累计确诊</span>
      <span class="chinaDableSpan">累计死亡</span>
      <span class="chinaDableSpan">累计治愈</span>
      <span class="chinaDableSpan">现存疑似</span>

      <span class="chinaDableSpan">{{ allData.data.gntotal }}</span>
      <span class="chinaDableSpan">{{ allData.data.deathtotal }}</span>
      <span class="chinaDableSpan">{{ allData.data.curetotal }}</span>
      <span class="chinaDableSpan">{{ allData.data.sustotal }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChinaCard",
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
.chinaDataTable {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.chinaDableSpan {
  width: 25%;
}
</style>
