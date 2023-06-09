import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Input Mask",
  description: "The input mask directive for Vue.js",
  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-CZ5DWZQ6RJ",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-CZ5DWZQ6RJ');",
    ],
    [
      "meta",
      {
        name: "msvalidate.01",
        content: "2006B3F1BA8B3EE3AD91DA91F4877102",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    localSearch: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Demo", link: "/demo/native-input/" },
    ],

    sidebar: [
      {
        items: [
          { text: "Getting Started", link: "/get-started" },
          { text: "Guide", link: "/guide" },
        ],
      },
      {
        text: "Demo",
        items: [
          { text: "Native Input", link: "/demo/native-input/" },
          { text: "Vuetify", link: "/demo/vuetify/" },
          { text: "Element Plus", link: "/demo/element-plus/" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Open-Tech-Foundation/vue-input-mask",
      },
    ],
    footer: {
      message: `
      Powered by <a href="https://open-tech-foundation.pages.dev/" target="_blank" rel="noreferrer noopener" aria-label="Built with docusaurus">
        <img style="display: inline;vertical-align: middle" src="https://open-tech-foundation.pages.dev/img/Logo.svg" alt="Powered by open tech foundation" width="32" height="32" />
      </a>
      <span>-</span>
      Built with 
      <a href="https://vitepress.dev/" target="_blank" rel="noreferrer noopener" aria-label="Built with vitepress">
      <img style="display: inline;vertical-align: middle" src="https://vitejs.dev/logo.svg" alt="Deploys by Cloudflare Pages" width="32" height="32" />
      </a>
      <span>-</span>
      Deploys by 
      <a href="https://pages.cloudflare.com/" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Cloudflare Pages">
        <img style="display: inline;vertical-align: middle" src="https://pages.cloudflare.com/resources/logo/logo.svg" alt="Deploys by Cloudflare Pages" width="32" height="32" />
      </a>
    `,
      copyright:
        'Copyright © 2023 <a href="https://github.com/Open-Tech-Foundation">Open Tech Foundation</a>',
    },
  },
});
