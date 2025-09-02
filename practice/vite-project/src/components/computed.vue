<script setup>
import {ref , computed} from 'vue'
const count = ref(0);
const doubleCount = computed(()=> count.value*2 + '秒');
</script>
<template>
    <h1>自動計算</h1>
    <form action="" class="my-5">
        <input type="text" v-model="count"/>
    </form>
    <h3>秒數變為2倍:{{ doubleCount }}</h3>
</template>

<style scoped>
    
</style>