# Hybrid

## 应用分类（App）
* WebApp
    * html+css+js
    * H5: 前端
    * 特点：
        * 跨平台
        * 成本低

    * 致命缺点
        * 不能调用硬件（原因: js是一门客户端语言）
* NativeApp    原生应用
    * 平台
        * iOS
        * android
        * winPhone
        * 塞班
        * 黑莓
        * ....
    * 特点
        * 成本高
        * 不能跨平台

        * 流畅
        * 硬件调用
* HybridApp 混合应用
    * 开发模式
        * Native主导
        * H5主导
    * 打包
        * Native主导: Native工程师（android&iOS）
        * H5主导：
            * 本地打包: Cordova
                * android环境（windows & mac）
                * iOS环境(mac)
            * 云打包
                > 把代码上传到别人的服务器，让服务器帮我们打包
                * DCloud
                    * HbuilderX
                * APICloud
                * ....

* js与Native接口联调
    > 原理：通过window对象作为中间层进行方法的调用
    * js调用native方法
    ```js
        window.moxiu.exit()
    ```
    * native调用js方法
    ```oc
        // js代码定义
        window.JSBridge = {
            trigger(type,args){

            },
            on(ele,type,handle){

            }
        }

        // 调用
         webview.stringByEvaluatingJavaScriptFromString("JSBridge.trigger('click', data)")
    ```


* 字符串如何表示换行
    * \n,\r
* 网页三剑客
    * dreamweaver
    * flash
    * firework