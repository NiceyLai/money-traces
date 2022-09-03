<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Layout class-prefix="layout">
    <Type></Type>
    <Expenditures></Expenditures>
    <Revenue></Revenue>
    <NumberPad></NumberPad>
  </Layout>
</template>

<script lang="ts">
import Expenditures from "@/components/New/Expenditures.vue";
import Revenue from "../components/New/Revenue.vue";
import NumberPad from "../components/New/NumberPad.vue";
import Type from "../components/New/Type.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Expenditures, Revenue, NumberPad, Type },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss"></style>