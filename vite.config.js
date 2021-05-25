import { defineConfig } from 'vite'
import svelte from '@sveltejs/vite-plugin-svelte'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        exclude: ['tinro']
    },
    resolve: {
        alias: {
            '@': '/src',
            '@router': '/src/_router',
            '@components': '/src/_components',
            '@store': '/src/_store',
            '@utils': '/src/_utils',
            '@views': '/src/views'
        }
    },
    plugins: [
        svelte(),
        WindiCSS()
    ]
})
