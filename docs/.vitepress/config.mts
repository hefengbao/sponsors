import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "赞助者",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: '👍感谢各位的支持👍',
      copyright: `Copyright © 2025-${new Date().getFullYear()} ♥贺丰宝♥`
    },
    nav: [
      { text: '京墨', link: 'https://github.com/hefengbao/jingmo', target: '_blank' },
    ],

    sidebar: [
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao' }
    ]
  }
})
