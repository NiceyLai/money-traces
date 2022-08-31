<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <Layout>
            <p>图片</p>
             <div class="new-wrapper">
               <router-link to="/new">
                     <Icon name="new"/>
                </router-link>
             </div>
            <div>money.vue</div>
        </Layout>
       
    </div>
    
</template>

<script lang="ts">
export default {
        
}
</script>

<style lang="scss" scoped>
.new-wrapper{
    overflow: auto;
    border: 1px solid red;
    .icon {
       width: 4em; height: 4em;
        color: #338bd8;
       fill: currentColor;
       overflow: hidden;
    }
}
</style>