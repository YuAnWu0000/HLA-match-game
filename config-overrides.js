const path = require('path')

module.exports = function override(config) {
  const targetRegex = /\.css$/
  const targetPackage = /css-loader/
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
  return config
}
