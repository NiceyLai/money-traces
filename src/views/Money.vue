<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout>
    <nav>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </nav>
    <div class="tags">
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
        <li>电器</li>
      </ul>
      <div class="new"><button>新增标签</button></div>
    </div>
    <div class="comeing">
      <div class="tags">
        <ul class="current">
          <li>工资</li>
          <li>外快</li>
          <li>股票</li>
          <li>基金</li>
          <li>其他</li>
        </ul>
        <div class="new"><button>新增标签</button></div>
      </div>
    </div>
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
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
@import "@/assets/style/reset.scss";
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
  .types {
    background: rgb(254, 223, 228);
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