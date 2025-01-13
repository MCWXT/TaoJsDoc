import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const taojs = defineNoteConfig({
  dir: 'TaoJs',
  link: '/',
  sidebar: 'auto'
})

export const notes = defineNotesConfig({
  dir: '/guides/',
  link: '/guides/',
  notes: [taojs],
})
