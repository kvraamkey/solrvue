export default {
    mount: {
        public: '/',
        src: '/dist'
    },
    alias: {
        '@src': './src',
        '@components': './src/_components',
        '@pages': './src/pages',
    },
    plugins: [
        '@snowpack/plugin-svelte', '@snowpack/plugin-dotenv',
        '@snowpack/plugin-postcss', [
            '@snowpack/plugin-webpack',
            {
                htmlMinifierOptions: false,
            },
        ]
    ],
    routes: [],
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2017',
        sourcemap: false
    },
    packageOptions: {},
    devOptions: {
        open: "none",
        tailwindConfig: './tailwind.config.js'
    },
    buildOptions: {}
}
