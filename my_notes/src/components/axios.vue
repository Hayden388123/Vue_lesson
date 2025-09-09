<script setup>
import axios1 from 'axios';
import {ref, onMounted} from 'vue';
const posts = ref([]);

onMounted(async()=>{
    try{
        const response = await axios1.get('https://jsonplaceholder.typicode.com/posts');
        posts.value = response.data;
        console.log(response.data);
        
    }
    catch(error){
        console.log(error);      
    }
})
</script>

<template>
<ul class="post-list">
    <li v-for="item in posts">
        <p>id:{{ item.id }}</p>
        <p>title:{{ item.title }}</p>
    </li>
</ul>
</template>

<style scoped>

</style>
