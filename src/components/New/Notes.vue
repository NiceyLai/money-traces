<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <label class="notes">
    <span class="name">备注</span>
    <input type="text" v-model="value" placeholder="请在这里输入备注" />
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value = "";
}
</script>

<style lang="scss" scoped>
.notes {
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
</style>