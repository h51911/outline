const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口
    entry:'./src/index.js',

    // 出口
    output:{
        path:path.resolve('./dist')
    },

    // 测试服务器
    devServer:{
        contentBase:"./public",
        open:true
    },

    // 加载器loader
    // webpack通过loader来加载各种各样的资源（如css,sass,less,vue文件组件,图片等)
    module:{
        // 配置加载器规则
        rules:[
            // js文件编译规则
            {
                test:/\.js$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                          presets:['@babel/preset-react']
                        }
                    }
                ]
            },

            // 其他文件编译规则
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            // 以template文件作为模板在出口目录中生成一个html文件,
            template:'./public/index.html',
            // filename:'login.html'
        })
    ]
}