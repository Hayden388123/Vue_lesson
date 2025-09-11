<script setup>
import {useNoteStore} from '../stores/NoteStore'
import { ref, onMounted } from 'vue';
const notestore = useNoteStore();
const{SearchNotes, markedPinned} = notestore;
let selectedNoteId = ref(0)
let deleteModal = null;
onMounted(function(){
   deleteModal = new bootstrap.Modal(document.getElementById('deleteModalGrid'))
})
function showDeleteModal(noteId){
    selectedNoteId.value = noteId;
    deleteModal.show();
}
function confirmDelete(){
    notestore.deleteNote(selectedNoteId.value);
    deleteModal.hide();
}
</script>
<template>
<main id="result" class="container mt-4">
    <div class="row d-flex justify-content-start">
        <div class="col-4 mr-2 mb-4" v-for="note in SearchNotes">            
            <div class="card">
                <i class="fa-solid fa-thumbtack me-3 mb-3" :class="{'rotate':note.pinned}" @click="markedPinned(note.id)"></i>
                <div class="card-body">
                    <h5 class="card-title">{{note.title}}</h5>
                    <hr>
                    <p class="card-text">{{note.content}}</p>
                    <div class="trash d-flex justify-content-end">
                        <a href="" @click.prevent="showDeleteModal(note.id)">
                            <i class="fa-solid fa-trash"></i> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
 <!-- delete modal -->
    <div class="modal" tabindex="-1" id="deleteModalGrid">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Confirm Delete</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Delete this data.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="confirmDelete()">Confirm</button>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card i{
  position: relative;
  top: 10px;
  left: 10px;
}
.rotate{
  transform: rotate(45deg);
  color: red;
}
.card{
    transition: all 0.3s;
}
.card:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.3s;
  cursor: pointer;
  background-color: #e2e2e2;;}
</style>