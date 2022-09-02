<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="expendituresTags">
    <ul class="current">
      <li>三餐</li>
      <li>零食</li>
      <li>交通</li>
      <li>衣服</li>
      <li>旅行</li>
      <li>宠物</li>
      <li>话费</li>
      <li>网费</li>
      <li>烟酒</li>
      <li>学习</li>
      <li>医疗</li>
      <li>住房</li>
      <li>美妆</li>
      <li>汽车</li>
      <li>娱乐</li>
      <li>人情</li>
      <li>电器</li>
      <li><button>新增</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";

.expendituresTags {
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
