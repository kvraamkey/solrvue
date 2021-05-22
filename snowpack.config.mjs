export default {
    mount: {
        public: '/',
        src: '/_dist'
    },
    alias: {
        '@src': './src',
        '@components': './src/_components',
        '@page': './src/_pages',
    },
    plugins: [
        '@snowpack/plugin-svelte', '@snowpack/plugin-dotenv', '@snowpack/plugin-postcss'
    ],
    routes: [],
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2018',
        sourcemap: false
    },
    packageOptions: {},
    devOptions: {
        open: "none",
        tailwindConfig: './tailwind.config.js'
    },
    buildOptions: {}
}
