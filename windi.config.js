import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
              },
        }
    }
});