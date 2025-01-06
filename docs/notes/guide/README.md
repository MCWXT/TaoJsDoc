---
title: 简介
createTime: 2025/01/05 18:25:39
permalink: /guide/
---

Tao.js是整合了Vue Tailwindcss Daisyui Axios 的前端ESM博客框架，适合新手和个人博客使用。

本框架具体来说是以Vue为基础的组件化，以Tailwindcss为基础的样式，Daisyui为UI组件库，的整合框架。

本框架适合Vue的ESM版组件化开发，但在此基础上，本框架真正的实现了单文件组件，剥离了Template，使用html实现Template，Components中只有Js脚本，并通过网络请求Template的html文件。

综上所述请参考文档[Vue](https://cn.vuejs.org), [Daisyui](https://daisyui.com/), [Tailwindcss](https://tailwindcss.com)

具体的文件结构如下:

- index.html
- main.js
- app.js
- views/
    - home.js
    - …
- components/
    - …
- template/
    - app.html
    - components/
        - …
    - views/
        - home.html
        - …
- script/
    - index.js
    - …
- style/
    - index.css
    - …
- data/
    - routes.js
    - json/
        - …
    - …
- assets/
    - img/
        - …
    - …
- cdn_modules/
    - …(具体以实物为准)

库:
  - Vue
  - Vue-router
  - Tailwindcss
  - Daisyui
  - Axios(请求)

示例:[Demo](https://tao-lake.vercel.app/)