import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '文档',
    items: [
      { text: '简介', link: '/notes/guide/README.md' },
      { text: '安装', link: '/notes/guide/安装.md' }
      ]
  },
  { text: '标签', link: '/blog/tags/' },
  { text: '博客', link: '/blog/' },
  { text: '归档', link: '/blog/archives/' },
])