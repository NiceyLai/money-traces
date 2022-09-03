<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="number">
    <Notes></Notes>
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
        <button>清空</button>
        <button>0</button>
        <button>.</button>
        <button>保存</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Notes from "@/components/New/Notes.vue";

export default {
  components: { Notes },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.number {
  position: absolute;
  left: 0;
  bottom: 56px;
  width: 100%;

  > .numberPad {
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 30px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: right;
    }
    > .buttons {
      @extend %clearFix;
      > button {
        background-color: #fff;
        width: 25%;
        height: 56px;
        border: 4px solid $color-bg1;
      }
    }
  }
}
</style>