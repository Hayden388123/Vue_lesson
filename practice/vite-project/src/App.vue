<script setup>
import HelloWorld from './components/HelloWorld.vue'
import box1 from './components/Box.vue'
import singapore from './assets/singapore.jpg'
import {ref} from 'vue'
const url = ref(singapore)
import life from './components/lifecircle.vue'
import computed from './components/computed.vue'
</script>

<template>
<life/>
<box1/>
<computed/>
  <!--
  <HelloWorld msg="Vite + Vue" />
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <img src="./assets/sea1.jpg" alt="">
  <img src="../public/sea2.jpg" alt="">
  <img :src="url" alt=""> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
