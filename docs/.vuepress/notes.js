import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const guide = defineNoteConfig({
  dir: 'guide',
  link: '/guide',
  sidebar: ['', '安装'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [guide],
})
