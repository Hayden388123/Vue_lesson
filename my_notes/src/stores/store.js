import { defineStore } from 'pinia'

export const todoStore = defineStore("todos", {
    state: () => ({
        todos: [
            {
                id: 1,
                text: '完成作業',
                content: '完成歷史作業11章'
                isFinished: false
            }
        ]
    }),
    getters: {

    },
    actions: {

    }

})