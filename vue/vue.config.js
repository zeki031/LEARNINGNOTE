module.exports = {
  css: {
    loaderOptions: {
      css: {
        localsConvention: 'camelCaseOnly'
      },
      sass: {
        prependData: '@import "~@/style/global.module.scss";'
      }
    }
  }
};
