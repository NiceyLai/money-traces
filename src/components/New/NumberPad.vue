<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="number">
    <Notes></Notes>
    <div class="numberPad">
      <div class="output">{{ output }}</div>
      <div class="buttons">
        <button @click="inputContent">1</button>
        <button @click="inputContent">2</button>
        <button @click="inputContent">3</button>
        <button>+</button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button>-</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button class="ok">保存</button>
        <button>清空</button>
        <button @click="inputContent">0</button>
        <button @click="inputContent">.</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Notes from "@/components/New/Notes.vue";

@Component
export default class NumberPad extends Vue {}
// import Notes from "@/components/New/Notes.vue";

// export default {
//   data() {
//     return {
//       output: "0",
//     };
//   },
//   methods: {
//     inputContent(event: MouseEvent) {
//       const button = event.target as HTMLButtonElement;
//       const input = button.textContent as string;
//       console.log(button.textContent);
//       if (this.output === "0") {
//         return;
//       }
//     },
//   },
//   components: { Notes },
// };
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
      height: 62px;
    }
    > .buttons {
      @extend %clearFix;
      > button {
        background-color: #fff;
        width: 25%;
        height: 56px;
        border: 4px solid $color-bg1;
        &.ok {
          height: 56 * 2px;
          float: right;
        }
      }
    }
  }
}
</style>
