import strict from "assert/strict";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },
  app: {
    head: {
      link: [{
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css'
      }]
    }
  },
  // devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      theme: 'nord',
      preload: [
        'python',
        'c',
        'java',
      ]
    },
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: {
        'rehype-katex': {
          output: 'html' // the default value is 'htmlAndMathml'
        }
      }
    },
  },
})