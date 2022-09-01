<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Layout>
        <nav>
            <ul class="types">
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
        </nav>
        <div class="tags">
            <ul class="current">
            <li>三餐</li>
            <li>零食</li>
            <li>交通</li>
            <li>衣服</li>
            <li>旅行</li>
            <li>宠物</li>
            <li>话费</li>
            <li>网费</li>
            <li>烟酒</li>
            <li>学习</li>
            <li>医疗</li>
            <li>住房</li>
            <li>美妆</li>
            <li>汽车</li>
            <li>娱乐</li>
            <li>人情</li>
            <li>电器</li>
        </ul>
        <div class="new"><button>新增标签</button></div>
        </div>
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

</style>