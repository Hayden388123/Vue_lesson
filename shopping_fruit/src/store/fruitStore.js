import { defineStore } from 'pinia'

export const userFruitStore = defineStore
    ('fruits', {
        state: () => ({
            fruits: [
                {
                    name: '藍莓',
                    price: 100
                },
                {
                    name: '香蕉',
                    price: 30
                },
                {
                    name: '芭樂',
                    price: 50
                }
            ],
            totalPrice: 0
        }),
        getters: {

        },
        actions: {
            addToCart(price) {
                this.totalPrice += price
            }
        }
    })