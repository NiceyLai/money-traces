<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Layout>
        <nav>
            <ul class="types">
                <li class="selected">
                    <router-link to="/expenditures">支出
                </router-link>
                </li>
                <li> <router-link to="/expenditures">收入
                </router-link></li>
            </ul>
        </nav>

        <label class="notes">
            <span class="name">备注</span>
            <input type="text">
        </label>
        <div class="numberPad">
            <div class="output">100</div>
            <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>×</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>+</button>
            <button>再记</button>
            <button>0</button>
            <button>.</button>
            <button>保存</button>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
export default {
        
}
</script>

<style lang="scss" scoped>
nav{
    .types{
        background: #d9d9d9;
        display: flex;
        text-align: center;
        font-size: 24px;
        >li{
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
             &.selected::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 25%;
                width: 50%;
                height: 3px;
                background: #333;
        }
        }
       
       
    }
    
}
</style>