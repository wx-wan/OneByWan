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
  /* 代码保存时进行eslint检测 */
  lintOnSave: process.env.NODE_ENV !== 'production',
  /* 是否使用编译器 default: false */
  runtimeCompiler: false,
  /* 默认babel-loader会忽略node_modules中的文件，你想显示的话在这个选项中列出来 */
  // transpileDependencies: [],
  /* 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响 */
  // crossorigin: "",
  /* 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次 */
  integrity: false,
  /* webpack 相关配置 */
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json', '.css'],
      alias: {
        //  别名地址修改
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'jquery': 'jquery/src/jquery'
      }
    }
    // webpack-load配置
    config.module = {
      rules: [
        // { test: /\.vue/, loader: 'vue-loader' },
        { test: /\.vue$/, use: [{ loader: 'vue-loader', options: {} }, { loader: 'iview-loader', options: { prefix: false } }] },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.svg$/, include: [resolve('src/icons/svg')], use: [{ loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]', esModule: false } }] },
        { test: /\.(gif|jpe?g|png|woff|svg|eot|ttf)\??.*$/, exclude: [resolve('src/icons/svg')], use: [{ loader: 'url-loader', options: { limit: 10000,/*小于limit限制的图片将转为base64嵌入引用位置*/name: 'img/[name].[hash:7].[ext]', esModule: false } }] }
      ],
    }
    // config.plugins = [
    //   new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery",
    //     "windows.jQuery": "jquery"
    //   })
    // ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'One by Wan 实验室——兴趣轮子'
        return args
      })
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
