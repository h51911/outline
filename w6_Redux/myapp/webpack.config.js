const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:'./src/index.js', // main.js
    // entry:{
    //     home:'./src/index.js',// home.js
    //     // login:'./src/login.js' //login.js
    // },

    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/[name].[hash:5].min.js',
        // publicPath:'./'
    },

    devServer:{
        contentBase:"./public", // 确定服务器根目录
        compress:true, // 启动服务器gzip压缩
    },

    // 目录映射（别名）
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'./src'),
            '~':path.resolve(__dirname,'./src/components'),
            '@store':path.resolve(__dirname,'./src/store')
        }
    },

    // 加载器
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:path.resolve(__dirname,'node_modules'), //排除node_modules目录
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:['@babel/preset-react'],
                            plugins:[
                                ['@babel/plugin-proposal-decorators',{legacy: true}],
                                ['@babel/plugin-proposal-class-properties',{loose: true}],
                                '@babel/plugin-syntax-dynamic-import',
                                ['import',{
                                    "libraryName": "antd",
                                    "libraryDirectory": "es",
                                    "style": "css" // `style: true` 会加载 less 文件
                                  }]
                            ]
                        }
                    }
                ]
            },

            // css loader(注意顺序:从后往前)
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            // sass loader(注意顺序:从后往前)
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            // 以template文件作为模板在出口目录中生成一个html文件,
            template:'./public/index.html',
            // filename:'login.html'
        }),

        // webpack实现多页面应用
        // new HtmlWebpackPlugin({
        //     // 以template文件作为模板在出口目录中生成一个html文件,
        //     template:'./public/index.html',
        //     filename:'login.html'
        // }),

        new CleanWebpackPlugin()
    ]
}