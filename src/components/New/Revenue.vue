<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="revenueTags">
    <ul class="current">
      <li><i class="iconfont icon-gongzi"></i>工资</li>
      <li><i class="iconfont icon-qian"></i>外快</li>
      <li><i class="iconfont icon-gupiao"></i>股票</li>
      <li><i class="iconfont icon-hongbao1"></i>红包</li>
      <li><i class="iconfont icon-jijin"></i>基金</li>
      <li><i class="iconfont icon-qita"></i>其他</li>
      <li><i class="iconfont icon-xinzeng"></i>新增</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";

.revenueTags {
  display: none;
  font-size: 14px;
  width: 100%;
  height: 36vh;
  overflow: auto;
  position: fixed;
  top: 64px;
  left: 0;
  > .current {
    margin-left: 16px;
    display: flex;
    flex-wrap: wrap;

    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 20px;
      margin: 10px 5px;
    }
  }
}
</style>

<style>
@import "@/assets/style/icon.css";
</style>