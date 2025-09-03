<script setup>
import product from './components/product.vue';
import productPinia from './components/productPinia.vue';
import {ref} from 'vue';

import {userFruitStore} from './store/fruitStore'
const fruitStore = userFruitStore()

const totalPrice = ref(0);
function updateTotal(price){
totalPrice.value += price
}
</script>

<template>
  <product name="Apple" :price="30"
  @add-Cart="updateTotal"/>
  <product name="Banana" :price="20"
   @add-Cart="updateTotal"/>
   <h1>Total Price:{{ totalPrice }}</h1>
   <hr/>
   <productPinia />
   <h2>Total Price:{{ fruitStore.totalPrice }}</h2>

</template>

<style scoped>

</style>
