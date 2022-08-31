<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <div class="nav-wrapper">
        <div class="content">
            <slot></slot>
            </div>
             <Nav></Nav>
    </div>
</template>

<script lang="ts">
export default {
        
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.content{
    overflow: auto;
    flex-grow: 1;
}
</style>