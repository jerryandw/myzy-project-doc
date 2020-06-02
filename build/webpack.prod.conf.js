const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const webpackBaseConfig = require('./webpack.base.conf.js');

var webpackConfig = merge(webpackBaseConfig, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        publicPath: 'dist/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].chunk.js'
    },
    optimization: {
      splitChunks: {
          cacheGroups: {
            vendorUI: {
              chunks: 'all',
              name: 'chunk-ui', // 单独将 UI组件 拆包
              priority: 20, // 权重需大于其它缓存组
              test:  /[\\/]node_modules[\\/](chinaoly-ui-vue|chinaoly-business-vue)[\\/]/
            },
            vendor: {
              chunks: 'initial',
              name: 'vendor',
              priority: 10,
              test: /[\\/]node_modules[\\/]/,
              enforce: true
            }
          }
      },
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  { loader: 'css-loader' },
                  { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  { loader: 'css-loader' },
                  { loader: 'postcss-loader' },
                  {
                    loader: 'less-loader',
                    options: {
                      javascriptEnabled: true
                    }
                  }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  { loader: 'css-loader' },
                  { loader: 'postcss-loader' },
                  { loader: 'sass-loader' }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
          filename: "[name].[hash].css",
          chunkFilename: "[id].css"
        }),
        new ParallelUglifyPlugin({
          cacheDir: '.cache/',
          uglifyES:{
            output: {
              comments: false
            },
            compress: { //压缩
              drop_console:true,
              collapse_vars: true,
              reduce_vars: true,
            },
            /* 是否在UglifyES删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用不大的警告 */
            warnings: false,
          }
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'index.html',
            inject: true,
        })
    ]
});

const productionGzip = true; // 是否gzip压缩
if (productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                ['js', 'css'].join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

module.exports = webpackConfig