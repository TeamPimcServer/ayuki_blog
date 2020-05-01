const emoji = require('markdown-it-emoji')
const path = require('path')
const dayjs = require('dayjs')
// const twemoji = require('twemoji')

const url = 'https://blog.akarinext.org'

module.exports = {
  title: 'あゆき\'s BLOG',

  description: 'TODO:変更',

  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  evergreen: true,
  plugins: [
    '@vuepress/pwa',
    ['sitemap', {
      hostname: url,
      changefreq: 'weekly',
    }],
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD H時m分')
      },
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
    ['meta', { property: 'og:description', content: 'TODO:変更' }],
    ['meta', { property: 'og:site_name', content: 'あゆき\'s BLOG' }],
    ['meta', { property: 'og:url', content: 'https://blog.akarinext.org' }],
    ['meta', { property: 'og:image', content: 'https://repo.akarinext.org/assets/image/twin_icon.webp' }],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  markdown: {
    config: md => {
      md.use(emoji)
      md.use(require('markdown-it-footnote'))
      /*
      md.renderer.rules.emoji = (token, idx) => twemoji.parse(token[idx].content, {
        folder: 'svg',
        ext: '.svg',
      }) */
    },
  },

  serviceWorker: true,

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

    // lastUpdated: true,

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
