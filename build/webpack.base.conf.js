const path = require('path');
const os = require('os');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}
module.exports = {
    entry: {
      main: '@/main'
    },
    output: {
        path: resolve('dist/dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader',
                        scss: 'style-loader!css-loader!sass-loader',
                        sass: 'style-loader!css-loader!sass-loader?indentedSyntax'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js[x]?$/,
                loader: 'happypack/loader?id=happybabel',
                include: resolve('src'),
                exclude: /node_modules/,
            },
            {
              test:/\.svg$/,
              loader:'svg-sprite-loader',
              include: resolve('src/images/svgIcon')
            },
            {
                test: /\.(gif|jpe?g|png|svg)\??.*$/,
                loader: 'url-loader?limit=1024&publicPath=../dist/',
                exclude: resolve('src/images/svgIcon'),
                options: {
                  esModule: false
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)\??.*$/,
                loader: 'url-loader?limit=1024&publicPath=../dist/',
                options: {
                  esModule: false
                }
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader?cacheDirectory=true'],
            threadPool: happyThreadPool,
            verbose: true
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            'vue$': 'vue/dist/vue.common.js',
            '@': resolve('src'),
            'src': resolve('src')
        },
        symlinks:false,
        cacheWithContext:false
    }
};
