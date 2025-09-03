<script setup>
import {userFruitStore} from '../store/fruitStore'
const fruitStore = userFruitStore()
const fruits = fruitStore.fruits;
</script>

<template>
<div class="container d-flex">
    <div class="mb-3" v-for="item in fruits">
        <h2>{{ item.name }}</h2>
        <p>一斤{{item.price}}元</p>
        <button type="button" class="mt-3" @click="fruitStore.addToCart(item.price)">
            加入購物車
        </button>
    </div>
</div>
</template>

<style scoped>

</style>
