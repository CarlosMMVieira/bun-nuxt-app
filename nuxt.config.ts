import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  //...
  build: {
    transpile: ["vuetify"],
  },
  runtimeConfig: {
    public: {
      DEPLOYMENT_TARGET: process.env.NUXT_PUBLIC_DEPLOYMENT_TARGET,
    },
    // Define your runtime configuration variables here
    // ... other variables
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/i18n",

    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  plugins: [
    "~/plugins/01.runtime-config.ts",
    // ... other plugins
  ],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
});
