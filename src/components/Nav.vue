<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      主页
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";
nav {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 101;
  width: 100%;
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  background-color: $color-bodybackground;
  > .item {
    padding: 2px 0;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: $color-highlight;
  }
}
</style>