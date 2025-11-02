export default defineNuxtConfig({
  modules: ["../src/module"],
  // Defaults
  particles: {
    mode: "full",
    lazy: true,
  },
  devtools: { enabled: true },

  compatibilityDate: "2025-11-02",
});
