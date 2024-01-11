// plugins/myPlugin.js

export default defineNuxtPlugin(({ $config }) => {
  // fix: workaround to allow setting environments after build time (runtime) on deployments, since this is no longer possible with nitro: https://github.com/nuxt/nuxt/issues/13248#issuecomment-1397291275
  const runtimeConfig = {
    ...$config,
    public: {
      ...$config.public,
      BASE_URL: $config.public.BASE_URL || "http://localhost:8081",
      DEPLOYMENT_TARGET: $config.public.DEPLOYMENT_TARGET || "",
    },
  };

  return {
    provide: {
      runtimeConfig,
    },
  };
});
