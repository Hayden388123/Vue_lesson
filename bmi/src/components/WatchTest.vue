<script setup>
import {ref ,watch, watchEffect} from 'vue';
const inputValue = ref('');
const inputLength = ref(0);
watch(inputValue, (newVal)=>{
    inputLength.value = newVal.length;
});
watchEffect(()=>{
    inputLength.value = inputValue.length;
})
</script>
<template>
    <div>
        <input type="text" placeholder="輸入文字" v-model="inputValue">
        <p>輸入的文字長度{{ inputLength }}</p>
    </div>
</template>

<style scoped>
    
</style>