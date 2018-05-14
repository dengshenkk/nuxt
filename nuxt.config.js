module.exports = {

  /**
   * 全局css定义
   */
  css: [
    'assets/css/main.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'},
      {name: 'SSR', content: 'Vue基于Nuxt进行客户端渲染(SSR)'},
      {name: 'keyword', content: 'Vue,Nuxt,客户端渲染,SSR'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
