<template>
  <div class="WorldCard">

      <h3>海外</h3>
    <div class="worldDataTable">
      <span class="worldDableSpan">现存确诊</span>
      <span class="worldDableSpan">累计境外输入</span>
      <span class="worldDableSpan">现存无症状</span>


      <span class="worldDableSpan">{{ allData.data.othertotal.certain }}</span>
      <span class="worldDableSpan">{{ allData.data.othertotal.die }}</span>
      <span class="worldDableSpan">{{ allData.data.othertotal.recure }}</span>

    <span class="worldDableSpan">{{ allData.data.othertotal.certain_inc }}</span>
      <span class="worldDableSpan">{{ allData.data.othertotal.die_inc }}</span>
      <span class="worldDableSpan">{{ allData.data.othertotal.recure_inc }}</span>
     
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

<style lang="less" scope>
.wor
.worldDataTable{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.worldDableSpan{
    width: calc(100%/3);
}
</style>
