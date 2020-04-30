const path = require('path')
const url = 'https://blog.akarinext.org'

module.exports = {
  title: 'あゆき\'s BLOG',

  description: 'Vuepress theme of meteorlxy\'s blog',

  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  evergreen: true,
  plugins: [
    '@vuepress/pwa',
    'sitemap',
    {
      hostname: url,
      changefreq: 'weekly',
    },
  ],
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
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'あゆき\'s BLOG' }],
    ['meta', { property: 'og:description', content: '後で変える' }],
    ['meta', { property: 'og:site_name', content: 'はじめてのVuePress' }],
    ['meta', { property: 'og:url', content: 'https://blog.akarinext.org' }],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
  ],

  themeConfig: {
    lang: 'ja-JP',

    personalInfo: {
      nickname: 'ゆぴ & あき',
      description: '主にMinecraftサーバーを運営しています。',
      email: 'teampimcserver@gmail.com',
      location: 'Japan',
      organization: 'Team PimcServer',
      organization2: 'Team OrangeServer',

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
      owner: 'TeamPimcServer',
      repo: 'ayuki_blog',
      clientId: '',
      clientSecret: '',
      autoCreateIssue: false,
    },

    pagination: {
      perPage: 5,
    },
  },
}
