export default defineNuxtConfig({
    modules: ['../src/module'],
    devtools: { enabled: true },
    compatibilityDate: '2025-11-02',

    // Defaults
    particles: {
        mode: 'full',
        lazy: true,
    },
})
