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
import Expenditures from "@/components/New/Expenditures.vue";
import Revenue from "../components/New/Revenue.vue";
import Number from "../components/New/Number.vue";
import Type from "../components/New/Type.vue";

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
@/components/New/Expenditures.vue ../components/New/Revenue.vue
