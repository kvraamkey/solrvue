import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
    safelist: 'selected',
    darkMode: 'class',
    shortcuts: {
        'selected': '!bg-blue-800 cursor-pointer',
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
            },
        }
    }
});