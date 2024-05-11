import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';

export const TestStore = defineStore('counter', () => {
    const name = ref('');

    const filteredBooks = computed(() => {
    });

    function increment(item) {
    }

    return { name, increment, filteredBooks};
});
