<script setup>
import{ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'

const seconds = ref(0)
let timer = null

onBeforeMount(()=>{
    console.log('這是Beforemount');
    
});
onMounted(()=>{
    console.log('這是Mounted');
    timer = setInterval(()=>{
        seconds.value++
    },1000);
});
function stop(){
    clearInterval(timer)
};

</script>

<template>
<h1>計時器</h1>
<p>{{ seconds }} 秒</p>
<button class="btn btn-warning" @click="stop">STOP</button>
</template>

<style scoped>
</style>