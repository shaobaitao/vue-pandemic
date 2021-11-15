<template>
  <div class="four-container">
    <div class="WorldCard">
      <h2 class="CardTitle">海外病例</h2>
      <div class="worldDataTable">
        <span class="worldDableSpan itemTitle">累计确诊</span>
        <span class="worldDableSpan itemTitle">累计死亡</span>
        <span class="worldDableSpan itemTitle">累计治愈</span>
        <span class="worldDableSpan itemData">{{Math.round(allData.data.othertotal.certain/10000)}}万</span>
        <span class="worldDableSpan itemData">{{Math.round(allData.data.othertotal.die/10000)
        }}万</span>
        <span class="worldDableSpan itemData">{{
          Math.round(allData.data.othertotal.recure/10000)
        }}万</span>

        <span class="worldDableSpan itemDataAdd"
          >较昨日{{ allData.data.othertotal.certain_inc }}</span
        >
        <span class="worldDableSpan itemDataAdd"
          >较昨日{{ allData.data.othertotal.die_inc }}</span
        >
        <span class="worldDableSpan itemDataAdd"
          >较昨日{{ allData.data.othertotal.recure_inc }}</span
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
  name: "WorldCard",
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

<style lang="less" scope>
.WorldCard {
  height: 30vh;
  padding: 10px;
  box-shadow: inset 1px 1px 16px #ee44ee;
}
.worldDataTable {
  height: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.worldDableSpan {
  width: calc(100% / 3);
  font-weight: 500;
}

.itemTitle {
  font-size: 0.8em;
}
.itemData {
  font-size: 1.2em;
}
.itemDataAdd {
  font-size: 0.6em;
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
