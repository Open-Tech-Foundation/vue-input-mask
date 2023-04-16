import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Input Mask",
  description: "The input mask directive for Vue.js",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    localSearch: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Demo", link: "/demo/native" },
    ],

    sidebar: [
      {
        items: [{ text: "Getting Started", link: "/get-started" }],
      },
      {
        text: "Demo",
        items: [{ text: "Native", link: "/demo/native" }],
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
