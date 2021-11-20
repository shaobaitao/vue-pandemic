<template>
    <div class="WorldCard">
      <h2 class="CardTitle">海外病例</h2>
      <div class="worldDataTable">
        <span class="worldDableSpan itemTitle">累计确诊</span>
        <span class="worldDableSpan itemTitle">累计死亡</span>
        <span class="worldDableSpan itemTitle">累计治愈</span>

        <span class="worldDableSpan itemData">{{ Math.round(allData.data.othertotal.certain/10000) }}万</span>
        <span class="worldDableSpan itemData">{{ Math.round(allData.data.othertotal.die/10000) }}万</span>
        <span class="worldDableSpan itemData">{{ Math.round(allData.data.othertotal.recure/10000) }}万</span>

        <span class="worldDableSpan itemDataAdd">较昨日{{ allData.data.othertotal.certain_inc }}</span>
        <span class="worldDableSpan itemDataAdd">较昨日{{ allData.data.othertotal.die_inc }}</span>
        <span class="worldDableSpan itemDataAdd">较昨日{{ allData.data.othertotal.recure_inc }}</span>
      </div>
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
};
</script>

<style lang="less" scope>
.WorldCard {
  height: 30vh;
  padding: 10px;
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
</style>
