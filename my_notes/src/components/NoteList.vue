<script setup>
import {useNoteStore} from '../stores/NoteStore'
import { ref } from 'vue';
const notestore = useNoteStore();
</script>
<template>
    <div class="sideBar">
        <div class="text-center">
            <router-link :to="{name:'AddNote'}">
                <button class="mt-3 btn btn-warning w-75">Add Note</button>
             </router-link>
        </div>

        <div class="container my-4">
            <div class="row">
                <div class="col-12 mb-4">
                    <h5 class="text-center"><i class="fa-solid fa-star"></i>&nbsp;&nbsp;Important</h5>
                    <ul class="list-group mt-4">
                        <li class="list-group-item d-flex justify-content-between" v-for="note in notestore.pinnedNotes">
                            <i class="fa-solid fa-thumbtack me-3 rotate" @click="notestore.markedPinned(note.id)"></i>
                            <span>{{note.title}}</span>
                            <i class="fa-solid fa-trash" @click="notestore.deleteNote(note.id)"></i>
                        </li>
                    </ul>
                </div>
                <div class="col-12 mt-4">
                    <h5 class="text-center"><i class="fa-solid fa-list"></i>&nbsp;General</h5>
                    <ul class="list-group mt-4 ">
                        <li class="list-group-item d-flex justify-content-between" v-for="note in notestore.unPinnedNotes">
                            <i class="fa-solid fa-thumbtack me-3" @click="notestore.markedPinned(note.id)"></i>
                            <span>{{note.title}}</span>
                            <i class="fa-solid fa-trash" @click="notestore.deleteNote(note.id)"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- delete modal -->
    <div class="modal" tabindex="-1" id="deleteModal">
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
            <button type="button" class="btn btn-primary">Confirm</button>
        </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.sideBar{
    width: 100%;
    background: #f0f0f0;
    height: 80vh;
}
.modal {
    transition: opacity 0.3s ease;
}
.rotate{
    color: red;
    transform: rotate(45deg);
}
</style>