// commonJS模块规范的js配置
module.exports = {
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