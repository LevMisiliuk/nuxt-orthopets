// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  app: {
    head: {
      title: 'Карта сертифікованих ортопедів',
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Ортопедичне-нейрохірургічне ветеринарне співтовариство України "Ortopets". Сайт з посиланнями та інформацією про сертифікованих ветерінарних ортопедів України' },
        { name: 'keywords', content: 'Ортопеди України Сертифіковані ветеринарні ортопеди Карта сертифікованих ортопедів' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      noscript: [
        { children: 'Javascript is required' }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/_colors.scss";'
        }
      }
    }
  },
  css: [
    '~/assets/styles.scss'
  ],
  runtimeConfig: {
    public: {
      map: process.env.MAP_KEY
    }
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'lang',
          path: '/:lang',
          component: resolve(__dirname, 'pages/index.vue')
        }
      );
    }
  }
}
