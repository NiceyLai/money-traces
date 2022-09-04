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
        <button @click="remove">删除</button>
        <button @click="inputContent">4</button>
        <button @click="inputContent">5</button>
        <button @click="inputContent">6</button>
        <button @click="add">+</button>
        <button @click="inputContent">7</button>
        <button @click="inputContent">8</button>
        <button @click="inputContent">9</button>
        <button @click="divider">-</button>
        <button @click="clear">清空</button>
        <button @click="inputContent">0</button>
        <button @click="inputContent">.</button>
        <button @click="ok" class="ok">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import Notes from "@/components/New/Notes.vue";

export default {
  data() {
    return {
      output: "0",
      input: 0,
      sum: 0,
    };
  },
  methods: {
    inputContent(event) {
      const input = event.target.textContent;
      // console.log(input);
      if (this.output.indexOf("+") > 0) {
        console.log(999999, this.sum, this.input);
        this.sum = this.input + +input;
        this.input = this.sum;
        console.log(11111, this.input, this.sum);
      }
      if (this.output.length === 16) {
        return;
      }
      if (this.output === "0") {
        if ("0123456789".indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        this.input = +input;
        return;
      }
      if (this.output.indexOf(".") >= 0) {
        //保证里面只有一个小数点
        if (input === ".") return;
        // 保证只输出小数点后两位
        if (this.output.length === this.output.indexOf(".") + 3) return;
      }
      this.input = +input;
      this.output += input;
    },

    remove() {
      if (this.output.length === 1) {
        this.output = "0";
      } else {
        this.output = this.output.slice(0, -1);
      }
    },

    clear() {
      this.output = "0";
    },

    ok() {
      console.log("提交账单");
      this.clear();
    },

    add(event) {
      const input = event.target.textContent;
      this.output += input;
    },

    // divider() {},
  },

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
      height: 62px;
      color: #eb5860;
    }
    > .buttons {
      background-color: $color-bg1;
      @extend %clearFix;
      > button {
        background-color: #fff;
        width: 25%;
        height: 56px;
        border-radius: 15px;
        border: 4px solid $color-bg1;

        &.ok {
          color: #fff;
          background-color: #eb5860;
        }
      }
    }
  }
}
</style>