// commonjs导出模块方法
module.exports = {
  devServe: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': 'http://mall-pre.springboot.cn',
      changeOrigin: true,
      pathRewrite: {
        'api': ''
      }
    }
  }
}
