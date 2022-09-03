<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="number">
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="请在这里输入备注" />
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
        <button>清空</button>
        <button>0</button>
        <button>.</button>
        <button>保存</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
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
  > .notes {
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      font-size: 16px;
      padding-right: 16px;
    }
    input {
      height: 40px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
}
</style>