// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxthub/core"],
  devtools: { enabled: true },
  hub: {
    remote: true,
  },
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      title: "Todo Nuxh",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css",
        },
      ],
    },
  },
});
