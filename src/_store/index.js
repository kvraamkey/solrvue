import { writable } from 'svelte/store';

const store = writable({
    activePage: 'Dashboard',
    isConnected : false
});

export default store;