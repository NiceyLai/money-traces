<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";

nav {
  position: relative;
  > .types {
    background: $color-bg1;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: #333;
      &.selected {
        color: $color-highlight;
      }

      &.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 25%;
        width: 50%;
        height: 3px;
        background: $color-highlight;
      }
    }
  }
}
</style>