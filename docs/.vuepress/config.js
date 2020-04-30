const path = require('path')

module.exports = {
  title: 'あゆき\'s BLOG',

  description: 'Vuepress theme of meteorlxy\'s blog',

  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  evergreen: true,
  plugins: ['@vuepress/pwa'],
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
    ['link', { rel: 'manifest', href: '/manifest.json' }],
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
          account: 'meteorlxy',
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
