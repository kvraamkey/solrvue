import { router } from "tinro";
import store from '@store';

export const getUrlParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
};

export const toCamelCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const checkAuth = () => {
    const sessionStarted = JSON.parse(sessionStorage.getItem('sessionStarted')) || false;
    if (!sessionStarted) {
        router.goto('/login');
    } else {
        store.update((self) => {
            self.isConnected = sessionStarted;
            return self;
        });
    }
}