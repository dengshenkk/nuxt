# nuxt

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
# 注意事项
- node版本大于8.6.0, 此demo使用的是v9.0.0
# 总结
- nuxt.config.js是nuxt的配置文件, 可以全局配置html,css,js的设置
- 在配置文件中配置head信息
- 嵌套路由需要在pages中创建一个父文件夹及父vue文件,并且需要在父文件中<nuxt-child>, 类似router-view的作用


