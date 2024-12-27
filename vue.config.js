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
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm-bundler.js",
      },
    },
  },
  devServer: {
    host: "localhost",
    port: 8080,
    allowedHosts: "all",
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-movie_app/' : '/', // GitHub Pages 경로 설정
  outputDir: 'docs', // GitHub Pages에서 사용하는 빌드 폴더
});
