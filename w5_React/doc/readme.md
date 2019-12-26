三阶段课程
1、NodejS
2、Vue
    * VueRouter
    * VueX
    * VueCLI
    * elementUI
    * VantUI
    * axios
    ...

3、 React
    * ReactRouter
    * CRA
    * Redux
    * antd

4、微信开发

5、混合开发


git / github
git / 码云
git / coding
git / gitlab

3、React

前端三大框架
Vue React Angular

Angluar -> React -> Vue


VIM编辑界面


1. git clone git@github.com:h51911/outline.git
2. 以后每一天
    1. git pulll origin master
        * git fetch origin master
        * git merge origin/master


Web应用

var username = 'laoxie';var a='laoxie'

版本
    * 模块化规范
        * cjs   commonjs
        * umd   amd/cmd
    * 环境
        * development   开发环境
        * production    生产环境（线上环境）

React版本：16.12.0
    * react 核心库
    * react-dom

包管理工具
    * npm
    * cnpm
        * install
        * uninstall

    * yarn
        * add
        * remove


import的引入方式
    * package.json
        * module
        * main
    * index.js

# React

* JSX
    * 编译规则
    * 使用限制
* 组件
    * 函数组件（无状态组件、受控组件、UI组件）
        * 必须有返回值
        
    * 类组件（状态组件、非受控组件、容器组件）
        > 利用类定义的组件
        

    * 内置组件
        * `<React.Fragment/>` 简写 `<></>`
        * 必须包含render方法
            * render方法必须有返回值


    PS: 尽量使用函数组件（能用函数组件就用函数组件，实在不行才用类组件）


## day5-4

### 面试题
* 为什么在React组件中必须引入React：因为JSX

### 复习
* webApp: react + react-dom
* nativeApp : react + react-native

* 渲染：ReactDOM.render(content,target)
    * content： React.createElement(type,props,children)
* JSX : javascript xml
    * 限制
        * html属性不能使用js关键字
            * class -> className
            * for   -> htmlFor
            * ...
        * 属性必须使用驼峰
            * onkeyup -> onKeyUp
            * ....
        * 标签要闭合
        * style属性必须为对象
            * css属性必须为驼峰
            ```css
                style={{color:'#58bc58',fontSize:'20px'}}
            ```
        * {}内必须为js表达式

* 组件
    * 定义
        * 函数组件（无状态组件、受控组件、UI组件）
        * 类组件（状态组件，非受控组件、容器组件）
            * state
                * 获取: this.state.xxx
                * 修改:

    * 通讯
        * 父->子: props
            1. 设置属性
            2. 使用
                * 函数组件:函数的第一个参数
                * 类组件


* 列表渲染(循环)
    * key:唯一且稳定
* 事件
    * this指向
        * bind改变this指向(注意:只会在第一次生效)
    * event
        * target
    * 传参
        bind(this,xxx)
* refs
    * 字符串:不推荐
    ```js
        <input ref="title"/>
    ```
    * 回调 Refs (推荐)
    ```js
        <input ref={el=>this.title=el}/>
    ```

* 案例:todolist
    > 谁的数据谁修改的原则
    * 查:数据展示
    * 增:添加数据
    * 删:
    * 改:
