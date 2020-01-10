const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express();

// 静态资源服务器
app.use(express.static('./'))

// 启动gzip压缩
const compression = require('compression');
app.use(compression());

app.use((req,res)=>{
    // 任何的请求返回index.html的内容
    fs.readFile(path.resolve(__dirname,'index.html'),(err,data)=>{
        res.set('Content-Type','text/html; charset=utf-8')
        res.send(data);
    })
})

app.listen(1911,()=>{
    console.log(`Server is runing on port 1911`)
})