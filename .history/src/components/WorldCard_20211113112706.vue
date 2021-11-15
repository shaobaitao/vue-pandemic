<template>
  <div class="four-container">
    <div class="WorldCard">
      <h3>海外</h3>
      <div class="worldDataTable">
        <span class="worldDableSpan itemTitle">现存确诊</span>
        <span class="worldDableSpan itemTitle">累计境外输入</span>
        <span class="worldDableSpan itemTitle">现存无症状</span>

        <span class="worldDableSpan itemData">{{
          allData.data.othertotal.certain
        }}</span>
        <span class="worldDableSpan itemData">{{
          allData.data.othertotal.die
        }}</span>
        <span class="worldDableSpan itemData">{{
          allData.data.othertotal.recure
        }}</span>

        <span class="worldDableSpan itemDataAdd">{{
          allData.data.othertotal.certain_inc
        }}</span>
        <span class="worldDableSpan itemDataAdd">{{
          allData.data.othertotal.die_inc
        }}</span>
        <span class="worldDableSpan itemDataAdd">{{
          allData.data.othertotal.recure_inc
        }}</span>
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
  height: 20vh;
  box-shadow: inset 1px 1px 16px #ee44ee;
}
.worldDataTable {
  height: 80%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  al
}
.worldDableSpan {
  width: calc(100% / 3);
}

.itemTitle {
  font-size: 0.8em;
}
.itemData {
  font-size: 0.9em;
}
.itemDataAdd {
  font-size: 0.5em;
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
