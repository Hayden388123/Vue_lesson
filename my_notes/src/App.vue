<script setup>
// import axios from './components/axios.vue'
import Toolbar from './components/Toolbar.vue'
import NoteList from './components/NoteList.vue'
</script>

<template>
<!-- <axios /> -->
 <header>
 <Toolbar />
 </header>
 <div class="container-fluid">
  <div class="row">
    <div class="col-3">
      <NoteList />
    </div>
    <div class="col-9">
      <router-view></router-view>
    </div>
  </div>
 </div>
 <footer>
  <p>CopyRight@By Hayden</p>
 </footer>
</template>

<style scoped>
footer{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
}
footer p{
    color: white;
    line-height: 50px;
    text-align: center;
    margin: 0;
}
</style>
