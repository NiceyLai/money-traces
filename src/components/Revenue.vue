<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="revenueTags">
    <ul class="current">
      <li>工资</li>
      <li>外快</li>
      <li>股票</li>
      <li>基金</li>
      <li>其他</li>
      <li><button>新增</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";

.revenueTags {
  display: none;
  > .current {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > li {
      display: flex;
      align-items: center;
      background: $color-background;
      height: 30px;
      border-radius: 12px;
      padding: 0 20px;
      margin: 10px 10px;
      white-space: nowrap;
      > button {
        border: none;
        background: transparent;
      }
    }
  }
}
</style>
