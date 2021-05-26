import App from '@router/index.svelte';
import 'virtual:windi.css';
import '@/app.css';

const app = new App({
    target: document.getElementById('app')
})

export default app
