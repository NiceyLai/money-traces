<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout>
    <nav>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </nav>
    <Expenditures></Expenditures>
    <Revenue></Revenue>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" />
    </label>
    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>×</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>+</button>
        <button>再记</button>
        <button>0</button>
        <button>.</button>
        <button>保存</button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import Expenditures from "@/components/Expenditures.vue";
import Revenue from "../components/Revenue.vue";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Expenditures, Revenue },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.new-wrapper {
  overflow: auto;
  .icon {
    width: 4em;
    height: 4em;
    color: $color-highlight;
    fill: currentColor;
    overflow: hidden;
  }
}
nav {
  > .types {
    background: $color-background;
    display: flex;
    text-align: center;
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