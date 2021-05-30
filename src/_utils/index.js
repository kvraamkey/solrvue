// @ts-nocheck
import { router } from "tinro";
import store from '@store';

export const credentials = JSON.parse(sessionStorage.getItem('credentials'));

export const getUrlParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
};

export const toCamelCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const checkAuth = () => {
    const sessionStarted = JSON.parse(sessionStorage.getItem('sessionStarted')) || false;
    const credentials = sessionStorage.getItem('credentials')
    if (!sessionStarted || !credentials) {
        router.goto('/login');
    } else {
        store.update((self) => {
            self.isConnected = sessionStarted;
            return self;
        });
    }
}


export const fetchApi = async (url, action, payloads = {}) => {
    const response = await fetch(`http://localhost:8080/solr/${url}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json;charset=utf-8', ...credentials, solr_action: action },
        body: JSON.stringify(payloads)
    });
    return await response.json();
};