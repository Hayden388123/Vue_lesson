<script setup>
import {ref, defineProps,defineEmits} from 'vue'
const props = defineProps(['name','price']);
const emit = defineEmits(['add-Cart']);
function addToCart(){
    emit('add-Cart',props.price)
}
</script>

<template>
<div class="card mb-3" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <p class="card-text">${{price}}</p>
        <a href="#" class="btn btn-primary" @click="addToCart">Add To Cart</a>
    </div>
</div>
</template>

<style scoped>

</style>
