import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '文档',
    items: [
      { text: 'Tao.js', link: '/guide/' },
      { text: 'Vue.js', link: 'https://cn.vuejs.org' },
      { text: 'Tailwindcss', link: 'https://tailwindcss.com' },
      { text: 'Daisyui', link: 'https://daisyui.com' },
      ]
  },
  { text: '博客', link: 'https://mcwxt.top' },
])