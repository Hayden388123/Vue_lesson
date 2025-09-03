<script setup>
import bmi from './components/bmi.vue';
import WatchTest from './components/WatchTest.vue';
import WatchEffect from './components/WatchEffect.vue';
</script>

<template>
  <!-- <bmi/>
  <WatchTest />
  <WatchEffect /> -->
   <div class="container mb-3">
    <router-link to="/"> <button type="button" class="me-3">BMI</button></router-link>
   <router-link to="/WatchTest"> <button type="button" class="me-3">WatchTest</button></router-link>
   <router-link to="/WatchEffect"> <button type="button" class="me-3">WatchEffect</button></router-link>
  </div>
  
  <router-view></router-view>
</template>

<style scoped>

</style>
