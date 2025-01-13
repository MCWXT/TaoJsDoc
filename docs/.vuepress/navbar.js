import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '文档',
    items: [
      { text: 'Tao.js', link: '/Tao.js/guide/' },
      ]
  },
  { text: '标签', link: '/blog/tags/' },
  { text: '博客', link: '/blog/' },
  { text: '归档', link: '/blog/archives/' },
])