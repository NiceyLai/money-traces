<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="number">
    <Notes></Notes>
    <div class="numberPad">
      <div class="output">
        <i class="iconfont icon-qianqian-"></i> {{ currentNumber }}
      </div>
      <div class="buttons">
        <button @click="run">1</button>
        <button @click="run">2</button>
        <button @click="run">3</button>
        <button @click="remove">删除</button>
        <button @click="run">4</button>
        <button @click="run">5</button>
        <button @click="run">6</button>
        <button @click="operate">+</button>
        <button @click="run">7</button>
        <button @click="run">8</button>
        <button @click="run">9</button>
        <button @click="operate">-</button>
        <button @click="clear">清空</button>
        <button @click="run">0</button>
        <button @click="run">.</button>
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
      currentNumber: "0",
      prevNumber: "0",
      sign: "",
      result: 0,
      input: "",
    };
  },
  methods: {
    run(e) {
      const text = e.target.textContent;
      this.pushNumber(text);
    },
    caculate() {
      console.log(this.input);
      const arr = this.input.split("");
      console.log(55555, arr);
      arr.forEach((item, index) => {
        if (item === "+" && index !== 0) {
          arr[index - 1] = Number(arr[index - 1]) + Number(arr[index + 1]);
          console.log(222222, arr[index - 1]);
        }
      });
    },
    pushNumber(num) {
      if (this.currentNumber.length === 16) {
        return;
      }
      if (this.currentNumber === "0") {
        if ("0123456789".indexOf(num) >= 0) {
          this.currentNumber = num;
        } else {
          this.currentNumber += num;
        }
        this.input += num;

        return;
      }
      if (this.currentNumber.indexOf(".") >= 0) {
        //保证里面只有一个小数点
        if (num === ".") return;
        // 保证只输出小数点后两位
        if (this.currentNumber.length === this.currentNumber.indexOf(".") + 3)
          return;
      }
      this.input += num;
      this.caculate();

      this.currentNumber = this.currentNumber + num;
    },

    remove() {
      if (this.currentNumber.toString().length === 1) {
        this.currentNumber = "0";
        this.input = "";
        return;
      }
      this.currentNumber = this.currentNumber.toString().slice(0, -1);
      this.input = this.currentNumber;
    },

    clear() {
      this.currentNumber = "0";
      this.sign = "";
      this.prevNumber = "0";
      this.input = "";
    },

    operate(text) {
      if (!this.currentNumber.toString().length) return;
      this.sign = text.target.innerHTML;
      this.prevNumber = this.currentNumber;
      this.currentNumber = "";

      this.input = this.input + this.sign;
      this.caculate();
    },

    ok() {
      this.result = 0;
      const prev = Number(this.prevNumber);
      const current = Number(this.currentNumber);
      switch (this.sign) {
        case "+":
          this.result = prev + current;
          break;
        case "-":
          this.result = prev - current;
          break;
        default:
      }
      this.currentNumber = this.result ? this.result : this.currentNumber;
      this.sign = "";
      this.prevNumber = "0";

      console.log("提交账单", this.currentNumber);
      this.currentNumber = "0";
      this.input = "";
    },
  },

  components: { Notes },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
.number {
  position: absolute;
  left: 0;
  bottom: 54px;
  width: 100%;
  > .numberPad {
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 30px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: left;
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

        &:active {
          filter: brightness(110%);
        }

        &.ok {
          color: #fff;
          background-color: #eb5860;
        }
      }
    }
  }
}
</style>