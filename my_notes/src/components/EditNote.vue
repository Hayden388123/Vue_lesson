<script setup>
import { ref, watchEffect } from 'vue';
import {useNoteStore} from '../stores/NoteStore'
import { useRouter, useRoute} from 'vue-router'
const notestore = useNoteStore();
const router = useRouter();
const route = useRoute();
let noteId = Number(route.params.id);

let noteTitle = ref('');
let noteContent = ref('');
watchEffect(() => {
  noteId = Number(route.params.id);
 const currentNote = notestore.notes.find(note => note.id === noteId);
  if (currentNote) {
    noteTitle.value = currentNote.title;
    noteContent.value = currentNote.content;
  }
});
let is_edited =ref(false);
const showSuccessAlert = ref(false);
function editNote(){
  if(noteTitle.value && noteContent.value){
    is_edited = notestore.editNote(noteId, noteTitle.value, noteContent.value);
  }
  if(is_edited){
    showSuccessAlert.value = true;
    setTimeout(() => {
      showSuccessAlert.value = false;
      router.push({ path: '/' });
    }, 1000); 
  }
}
</script>
<template>
<div class="container p-5">
  <div class="alert alert-success text-left" role="alert" v-show="showSuccessAlert">
    更新成功!
  </div>
  <h2 class="mb-5">編輯筆記</h2>
  <form @submit.prevent="editNote">
    <div class="mb-3">
        <input type="text" class="form-control" id="title" placeholder="請輸入標題..." v-model="noteTitle">
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="20" v-model="noteContent"></textarea>
    </div>
    <button class="btn btn-outline-success">更新 <i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>

</template>

<style scoped>
  
</style>