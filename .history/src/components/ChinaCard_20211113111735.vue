<template>
  <div class="four-container">
    <div class="ChinaCard">
      <h3>全国(含港澳台)</h3>
      <div class="chinaDataTable">
        <span class="chinaDableSpan itemTitle">现存确诊</span>
        <span class="chinaDableSpan itemTitle">累计境外输入</span>
        <span class="chinaDableSpan itemTitle">现存无症状</span>
        <span class="chinaDableSpan itemTitle">现存重症确诊</span>

        <span class="chinaDableSpan">{{ allData.data.econNum }}</span>
        <span class="chinaDableSpan">{{ allData.data.jwsrNum }}</span>
        <span class="chinaDableSpan">{{ allData.data.asymptomNum }}</span>
        <span class="chinaDableSpan">{{ allData.data.heconNum }}</span>

        <span class="chinaDableSpan"
          >较昨日{{ allData.data.add_daily.addecon_new }}</span
        >
        <span class="chinaDableSpan"
          >较昨日{{ allData.data.add_daily.addjwsr }}</span
        >
        <span class="chinaDableSpan"
          >较昨日{{ allData.data.add_daily.addasymptom }}</span
        >
        <span class="chinaDableSpan"
          >较昨日{{ allData.data.add_daily.addhecon_new }}</span
        >

        <span class="chinaDableSpan itemTitle">累计确诊</span>
        <span class="chinaDableSpan itemTitle">累计死亡</span>
        <span class="chinaDableSpan itemTitle">累计治愈</span>
        <span class="chinaDableSpan itemTitle">现存疑似</span>

        <span class="chinaDableSpan">{{ allData.data.gntotal }}</span>
        <span class="chinaDableSpan">{{ allData.data.deathtotal }}</span>
        <span class="chinaDableSpan">{{ allData.data.curetotal }}</span>
        <span class="chinaDableSpan">{{ allData.data.sustotal }}</span>

        <span class="chinaDableSpan"
          >较昨日{{ allData.data.add_daily.addcon_new }}</span
        >
        <span class="chinaDableSpan"
          >较昨日{{ allData.data.add_daily.adddeath_new }}</span
        >
        <span class="chinaDableSpan"
          >较昨日{{ allData.data.add_daily.addcure_new }}</span
        >
        <span class="chinaDableSpan"
          >较昨日{{ allData.data.add_daily.wjw_addsus_new }}</span
        >
      </div>
    </div>
    <div class="fourBorder border1"></div>
    <div class="fourBorder border2"></div>
    <div class="fourBorder border3"></div>
    <div class="fourBorder border4"></div>
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
.ChinaCard {
  height: 20vh;
  box-shadow: inset 1px 1px 16px #ee44ee;
}
.chinaDataTable {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.chinaDableSpan {
  width: 25%;
}

.itemTitle{
  font-size: 18px;
}


.four-container {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background: rgba(75, 139, 247, 0.05);
  box-shadow: 1px 1px 16px #ee44ee inset;
  .fourBorder {
    position: absolute;
    width: 10px;
    height: 10px;
  }
  .border1 {
    left: -1px;
    top: -1px;
    border-left: 2px solid #ee88ee;
    border-top: 2px solid #ee88ee;
  }
  .border2 {
    right: -1px;
    top: -1px;
    border-right: 2px solid #ee88ee;
    border-top: 2px solid #ee88ee;
  }
  .border3 {
    left: -1px;
    bottom: -1px;
    border-left: 2px solid #ee88ee;
    border-bottom: 2px solid #ee88ee;
  }
  .border4 {
    right: -1px;
    bottom: -1px;
    border-right: 2px solid #ee88ee;
    border-bottom: 2px solid #ee88ee;
  }
}
</style>
