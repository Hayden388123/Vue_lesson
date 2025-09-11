import { defineStore } from 'pinia'
import SearchNote from '../components/SearchNote.vue';

export const useNoteStore = defineStore("notes", {
    state: () => ({
        notes: [{
            "id": 1,
            "title": "Travel Plan",
            "content": "明年暑假想去東京旅遊，準備好機票和住宿了。",
            "pinned": false
        },
        {
            "id": 2,
            "title": "Learning Plan",
            "content": "每天晚上花一小時學習新技術，提升自己的能力。",
            "pinned": false
        },
        {
            "id": 3,
            "title": "Reading Plan",
            "content": "今年計劃閱讀十本書，已經看完了三本。",
            "pinned": false
        },
        {
            "id": 4,
            "title": "Exercise Plan",
            "content": "每周至少三次運動，保持身體健康。",
            "pinned": true
        },
        {
            "id": 5,
            "title": "Work Plan",
            "content": "本週目標是完成所有的專案任務，並準時提交給客戶。",
            "pinned": true
        }
        ],
        searchResults: []
    }),
    getters: {
        pinnedNotes(state) {
            return state.notes.filter(note => note.pinned);
        },
        unPinnedNotes(state) {
            return state.notes.filter(note => !note.pinned);
        }
    },
    actions: {
        markedPinned(id) {
            const note = this.notes.find(note => note.id === id)
            note.pinned = !note.pinned
        },
        deleteNote(id) {
            const index = this.notes.findIndex(note => note.id === id);
            this.notes.splice(index, 1);
        },
        addNote(newTitle, newContent) {
            if (newTitle === null) return false;
            const last_id = this.notes.length + 1;
            this.notes.push({
                id: last_id,
                title: newTitle,
                content: newContent,
                pinned: false
            })
            return true;
        },
        editNote(id, newTitle, newContent) {
            const note = this.notes.find(note => note.id === id)
            if (note !== -1) {
                note.title = newTitle
                note.content = newContent
                return true
            }
        },
        searchNotes(keyword) {
            this.searchResults = this.notes.filter(
                note => note.title.includes(keyword) || note.content.includes(keyword));
            console.log(this.searchResults);
        },
    }
})