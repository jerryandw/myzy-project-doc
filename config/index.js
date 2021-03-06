// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: {
            NODE_ENV: '"production"'
        },
        index: path.resolve(__dirname, '../elm/index.html'),
        assetsRoot: path.resolve(__dirname, '../elm'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/elm/',
        productionSourceMap: true,
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        proxypath: 'http://www.zhongdafu.com/client',

    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: 8013,
        host:'0.0.0.0',
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        context: [ //代理路径
            '/shopping',
            '/ugc',
            '/v1',
            '/v2',
            '/v3',
            '/v4',
            '/bos',
            '/member',
            '/promotion',
            '/eus',
            '/payapi',
            '/img',
            '/user',
            '/v15',
        ],
        proxy: {
            
            '/api/v8': {
                // target: 'http://192.168.1.152:5001/yycp-qxjcfw-service',
                
				target: 'http://192.168.1.139:7901',
				pathRewrite: {
					'^/api/v8': '/'
				},
				changeOrigin: true
			},
      '/api/v5': {
        // target: 'http://192.168.1.152:5001/yycp-itsearch-service/',
				// target: 'http://192.168.1.139:8180',
				target: 'http://free.shenzhuo.vip:16374',
				pathRewrite: {
					'^/api/v5': '/'
				},
				changeOrigin: true
			},
        },
        
        // proxypath: 'http://cangdu.org:8001',
        proxypath: 'http://free.shenzhuo.vip:16374',
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}