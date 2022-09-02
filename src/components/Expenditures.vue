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
  font-size: 14px;
  width: 100%;
  height: 36vh;
  overflow: auto;
  position: fixed;
  top: 64px;
  left: 0;
  > .current {
    margin-left: 16px;
    display: flex;
    flex-wrap: wrap;

    > li {
      display: flex;
      align-items: center;
      background: $color-background;
      height: 30px;
      border-radius: 12px;
      padding: 0 20px;
      margin: 10px 10px;
      > button {
        border: none;
        background: transparent;
      }
    }
  }
}
</style>