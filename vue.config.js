module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '管理后台'
      return args
    })
  }
}
