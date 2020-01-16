module.exports = {
  publicPath: '/addressbook',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75, // 换算的基数
            propList: ['*'],
          }),
        ]
      }
    }
  },
}