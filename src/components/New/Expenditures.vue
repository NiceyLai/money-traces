<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="expendituresTags">
    <ul class="current">
      <li class="selected"><i class="iconfont icon-food1"></i>三餐</li>
      <li><i class="iconfont icon-food"></i>零食</li>
      <li><i class="iconfont icon-jiaotong"></i>交通</li>
      <li><i class="iconfont icon-lvhang"></i>旅行</li>
      <li><i class="iconfont icon-clothes"></i>衣服</li>
      <li><i class="iconfont icon-chongwu"></i>宠物</li>
      <li><i class="iconfont icon-dianhua"></i>话费</li>
      <li><i class="iconfont icon-wifi-full"></i>网费</li>
      <li><i class="iconfont icon-yanjiu"></i>烟酒</li>
      <li><i class="iconfont icon-xuexi"></i>学习</li>
      <li><i class="iconfont icon-yiliao"></i>医疗</li>
      <li><i class="iconfont icon-zhufang"></i>住房</li>
      <li><i class="iconfont icon-meizhuangleimu"></i>美妆</li>
      <li><i class="iconfont icon-icon"></i>汽车</li>
      <li><i class="iconfont icon-yule"></i>娱乐</li>
      <li><i class="iconfont icon-hongbao"></i>人情</li>
      <li><i class="iconfont icon-xinzeng"></i>新增</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";

.expendituresTags {
  // display: none;
  font-size: 14px;
  width: 100%;
  height: 33vh;
  top: 64px;
  overflow: auto;
  position: absolute;

  > .current {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    > li {
      color: #555;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 20px;
      margin: 10px 5px;
      &.selected {
        color: $color-highlight;
      }
    }
  }
}
</style>
<style>
@import "@/assets/style/icon.css";
</style>