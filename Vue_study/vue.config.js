const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  publicPath: './',
  assetsDir: 'assets',
  productionSourceMap: !1,
  chainWebpack: config => {
    config.resolve.symlinks(!0)
  },
  parallel: require('os').cpus().length > 1,
  devServer: {
    open: !0,
    host: '0.0.0.0',
    port: 9090,
    useLocalIp: true,
    overlay: {
      warnings: !0,
      errors: !0
    },
  }
}
