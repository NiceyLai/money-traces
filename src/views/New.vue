<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout class-prefix="layout">
    <nav>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </nav>
    <Expenditures></Expenditures>
    <Revenue></Revenue>
    <Number></Number>
  </Layout>
</template>

<script lang="ts">
import Expenditures from "@/components/Expenditures.vue";
import Revenue from "../components/Revenue.vue";
import Number from "../components/Number.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Expenditures, Revenue, Number },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss">
@import "@/assets/style/helper.scss";
.new-wrapper {
  .icon {
    width: 4em;
    height: 4em;
    color: $color-highlight;
    fill: currentColor;
  }
}
nav {
  position: relative;
  > .types {
    background: $color-background;
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
      &.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 25%;
        width: 50%;
        height: 3px;
        background: rgb(109, 107, 107);
      }
    }
  }
}
</style>
