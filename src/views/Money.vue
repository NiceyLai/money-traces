<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Layout>
      <p>图片</p>
      <div class="new-wrapper">
        <router-link to="/new">
          <Icon name="new" />
        </router-link>
      </div>
      <div>money.vue</div>
      <div>支出或者收入明细树</div>
    </Layout>
  </div>
</template>
<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";

.new-wrapper {
  overflow: auto;
  border: 1px solid red;
  .icon {
    width: 4em;
    height: 4em;
    color: $color-highlight;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>