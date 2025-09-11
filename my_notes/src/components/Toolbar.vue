<script setup>
import { ref } from 'vue';
import {useNoteStore} from '../stores/NoteStore'
import { useRouter} from 'vue-router'
const notestore = useNoteStore();
const router = useRouter()
const keyword = ref('');
function searchNotes(){
    notestore.searchNotes(keyword.value);
    router.push({ name: 'SearchNote' });
}
</script>
<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid d-flex">
    <a class="navbar-brand" href="/">
        <img class="logo" src="/logo.png" alt="">
        <span>My Notes</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex" @submit.prevent="searchNotes" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword" @keydown.enter="searchNotes"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
    .logo{
        width: 50px;
    }
</style>