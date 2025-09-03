<script setup>
import {ref, watchEffect} from 'vue'
const price = ref(0);
const count = ref(0);
let total = ref(0);
watchEffect(()=>{
    total.value = (price.value *count.value);
});
</script>
<template>
    <div>
        <h1>商品資料</h1>
        <label for="">單價</label>
        <input type="text" v-model="price" />
        <label for="">數量</label>
        <input type="text" v-model="count"/>
        <p>總金額:{{ total }}</p>
    </div>
</template>

<style scoped>
    
</style>