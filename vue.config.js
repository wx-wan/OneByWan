const path = require('path')
/*
*  vue.config.js 是一个可选的配置文件，如果项目中的（和package.json同级的）根目录中存在这个文
* 件，那么它会被@vue/cli-service自动加载。你也可以使用package.json中的vue字段，但是注意这种写法
* 需要严格遵循JSON的格式来写。
* */
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: 'assets',
  /* 指定生成的 index.html 的输出路径 (相对于 outputDir),也可以是一个绝对路径 */
  indexPath: 'index.html',
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: true,
  /* webpack 相关配置 */
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.css'],
      alias: {
        //  别名地址修改
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
    // 插件配置
    // webpack-load配置
    module: {
      rules: [
        { test: /\.vue$/, use: [{ loader: 'iview-loader', options: { prefix: false } }] }
      ]
    }
  },
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    /* 端口号 */
    port: 3000,
    /* 是否启用https */
    https: false,
    /* 是否启用https */
    hotOnly: false,
    // 错误、警告在页面弹出
    overlay: {
      warnings: false,
      errors: false
    }
  }
}
