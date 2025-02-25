const path = require('path')
const webpack = require('webpack')

module.exports = function override(config) {
  const targetRegex = /\.css$/
  const targetPackage = /css-loader/
  if (process.env.NODE_ENV === 'production') {
    config.output = {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/HLA-match-game/'
    }
    config.plugins = config.plugins.concat([
      new webpack.DefinePlugin({
        'process.env.PUBLIC_URL': JSON.stringify('/HLA-match-game/')
      })
    ])
  }
  // to make url() in css worked
  config.module.rules
    .find((r) => r.oneOf)
    .oneOf.find((r) => r.test.toString() === targetRegex.toString())
    .use.find((o) => o.loader && targetPackage.test(o.loader)).options.url =
    false
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src')
  }
  // config.devServer = {
  //   historyApiFallback: true,
  //   static: path.join(__dirname, 'build'),
  //   open: true
  // }
  return config
}
