const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.conf.js');
const package = require('../package.json');

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
      rules: [
          {
              test: /\.css$/,
              use: [ 'style-loader','css-loader','postcss-loader']
          },
          {
              test: /\.less$/,
              use: [ 'style-loader','css-loader' ,'postcss-loader',
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                  modifyVars: {
                    // less vars，customize ant design theme
                    // 'primary-color': '#F5222D',
                    // 'link-color': '#F5222D',
                    // 'border-radius-base': '4px'
                  }
                }
              }]
          },
          {
              test: /\.scss$/,
              use: [ 'style-loader','css-loader' ,'postcss-loader', 'sass-loader']
          }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            favicon: 'favicon.ico',
            inject: false
        })
    ],
    devServer: {
        port: 8010,
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true,
        stats: { colors: true },
        proxy: {
            //匹配代理的url
            '/api/v8': {
                // target: 'http://192.168.1.152:5001/yycp-qxjcfw-service',
                target: 'http://192.168.1.139:7901',
                //路径重写
                pathRewrite: { '^/api/v8': '/' },
                changeOrigin: true
            },
            '/api/v5': {
                // target: 'http://192.168.1.152:5001/yycp-itsearch-service/',
                // target: 'http://192.168.1.139:8180',
                target: 'http://free.shenzhuo.vip:16374',
                pathRewrite: { '^/api/v5': '/' },
                changeOrigin: true
            },
        }
    }
});
