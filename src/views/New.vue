<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout class-prefix="layout">
    <Type></Type>
    <Expenditures></Expenditures>
    <Revenue></Revenue>
    <Number></Number>
  </Layout>
</template>

<script lang="ts">
import Expenditures from "@/components/Expenditures.vue";
import Revenue from "../components/Revenue.vue";
import Number from "../components/Number.vue";
import Type from "../components/Type.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Expenditures, Revenue, Number, Type },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss"></style>
