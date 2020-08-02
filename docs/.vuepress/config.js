const path = require('path')
// const dayjs = require('dayjs')
// const twemoji = require('twemoji')

const url = 'https://blog.akarinext.org'

module.exports = {
  title: 'あゆき\'s BLOG',

  description: 'あきとゆぴによる気ままな共同ブログ',

  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  evergreen: true,
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: 'サイトに更新があります',
        buttonText: '更新する',
      },
    }],
    ['sitemap', {
      hostname: url,
      changefreq: 'weekly',
    }],
    'flowchart',
    ['vuepress-plugin-container', { type: 'right', defaultTitle: '' }],
    ['vuepress-plugin-container', { type: 'test', before: info => `<div class="test"><p class="title">${info}</p>`, after: '</div>' }],
    ['vuepress-plugin-container', { type: 'note', before: info => `<div class="note"><p class="title">${info}</p>`, after: '</div>' }],
    ['@vuepress/google-analytics', {
      ga: 'UA-163820425-2',
    }],

  ], /*
  plugins: {
    '@vuepress/pwa': {},
    sitemap: {
      hostname: url,
      changefreq: 'weekly',
    },
  }, */
  /*
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-132770851-2',
    }],
  ],
  */

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: 'https://repo.akarinext.org/assets/image/twin_icon.webp' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    // ['meta', { name: 'viewport' }], // TODO:SEO的に設定推奨！！(by aki) //TODO: 横ずれすることがある？
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'あゆき\'s BLOG' }],
    ['meta', { property: 'og:description', content: 'あきとゆぴによる気ままな共同ブログ' }],
    ['meta', { property: 'og:site_name', content: 'あゆき\'s BLOG' }],
    ['meta', { property: 'og:url', content: 'https://blog.akarinext.org' }],
    ['meta', { property: 'og:image', content: 'https://repo.akarinext.org/assets/image/twin_icon.webp' }],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  markdown: {
    lineNumbers: true,
    linkify: true,
    plugins: [
      'emoji',
      'footnote',
      'abbr',
      'task-lists',
    ],
    /*
    config: md => {
      md.use(emoji)
      md.use(require('markdown-it-footnote'))
      md.use(abbr)
      md.use(require('markdown-it-task-lists'))
      */
    /*
      md.renderer.rules.emoji = (token, idx) => twemoji.parse(token[idx].content, {
        folder: 'svg',
        ext: '.svg',
      })
    }, */
  },

  themeConfig: {
    lang: 'ja-JP',

    personalInfo: {
      nickname: 'ゆぴ & あき',
      description: '主にMinecraftサーバーを運営しています。',
      email: 'teampimcserver@gmail.com',
      location: 'Japan',
      organization: 'Team PimcServer',
      organization2: 'Team OrangeServer',
      organization3: 'Team BlackCrystal',

      avatar: 'https://repo.akarinext.org/assets/image/twin_icon.webp',

      sns: {
        github: {
          account: 'TeamPimcServer',
          link: 'https://github.com/TeamPimcServer',
        },
      },
    },

    header: {
      background: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: false,
      poweredByTheme: false,
      custom: 'Copyright 2020 <a href="https://github.com/TeamPimcServer" target="_blank">TeamPimcServer</a>',
    },

    infoCard: {
      headerBackground: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'このサイトについて', link: '/aboutsite/', exact: false },
    ],

    comments: {
      platform: 'github',
      owner: 'TeamPimcServer',
      repo: 'ayuki_blog',
      clientId: process.env.VSSUE_ID,
      clientSecret: process.env.VSSUE_SECRET,
      autoCreateIssue: false,
    },

    pagination: {
      perPage: 15,
    },
  },
}
