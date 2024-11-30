const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false), // Feature Flag 설정
      }),
    ],
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-movie_app/' : '/',
});
