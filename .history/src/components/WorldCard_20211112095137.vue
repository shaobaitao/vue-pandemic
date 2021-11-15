<template>
  <div class="WorldCard">111</div>
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
    width: 25%;
}
</style>
