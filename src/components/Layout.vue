<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
export default {
  props: ["classPrefix"],
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>