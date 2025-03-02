const path = require('path')
const webpack = require('webpack')

module.exports = function override(config) {
  const targetRegex = /\.css$/
  const targetPackage = /css-loader/
  // to make url() in css worked
  const cssLoaderOptions = config.module.rules
    .find((r) => r.oneOf)
    .oneOf.find((r) => r.test.toString() === targetRegex.toString())
    .use.find((o) => o.loader && targetPackage.test(o.loader)).options
  cssLoaderOptions.url = false
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src')
  }

  if (process.env.NODE_ENV === 'production') {
    config.output = {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/HLA-match-game/'
    }
    // cssLoaderOptions.url = {
    //   filter: (url, resourcePath) => {
    //     // 只修改本地圖片路徑，外部 URL (如 http://) 不受影響
    //     console.log(resourcePath)
    //     if (url.startsWith('images')) {
    //       return false
    //     }
    //     return true
    //   }
    // }
    // config.plugins = config.plugins.concat([
    //   new webpack.DefinePlugin({
    //     'process.env.PUBLIC_URL': JSON.stringify('/HLA-match-game')
    //   })
    // ])
  }
  return config
}
