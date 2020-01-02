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
                * 修改: this.setState()
                    > 覆盖原有数据

    * 通讯
        * 父->子: props
            1. 设置属性
            2. 使用
                * 函数组件:函数的第一个参数
                * 类组件
        * 子->父: 把父组件函数传递到子组件执行
        * 深层次组件
            * 逐层传递(不推荐,繁琐)



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
    * 删:删除数据
    * 改:改变数据


* webpack 项目构建工具
    * gulp: 基于步骤的构建工具
    ```js
        gulp.task('compileEs6',()=>{
            return gulp.src('./src/js/*.js')
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./dist'))
        })
    ```
    * webpack: 基于配置的构建工具
        > webpack.config.js, 是一个commonjs规范的模块
        * 配置项
            * entry
                > 默认:src/index.js
            * output
                > dist
            * 加载器loader
            * 插件plugin


## day5-5

### 面试题
* webpack与gulp的区别
* webpack的工作原理
* 在组件中设置一个定时器,组件销毁后,定时器是否还在

### 复习
* 组件通讯
    * 父->子: props
        1. 设置子组件的属性,并传递父组件数据
        2. 使用props
            * 函数组件: 函数的第一个参数
            * 类组件:
                * constructor第一个参数
                * this.props
    * 子->父: 利用props把父组件函数传入子组件执行
    * 深层次组件传参
        * 逐层传递
        * context
* webpack
    > webpack的工作原理
    * 配置参数
        * entry
        * output
        * devServer
        * loader: module.rules
            * babel-loader
        * plugins
            * html-webpack-plugin
* 事件
    * this指向: fn.bind(this)
    * event: 事件处理函数的最后一个参数
    * 传参: fn.bind(this,xxx)

* refs
    * 推荐:ref={(el)=>{this.username=el}}
    * React.createRef()
    ```js
        this.title = React.createRef();
        <input ref={this.title}>

        // 获取节点
        this.title.current;
    ```
* 列表循环
    * map
    * filter


### 知识点
* 深层次组件传参:Context
    >某个组件只要往自己的 context 里面放了某些数据，这个组件之下的所有子组件都直接访问这个数据
    * 使用步骤
        1. 创建一个Contentx
            ```js
                const MyContext = React.createContext('默认值');
            ```
        2. 父组件利用Provider共享数据
            ```js
                <MyContext.Provider value={{removeItem,completeItem}}></MyContext.Provider>
            ```
        3. 子组件获取数据
            * 类组件
                ```js
                    // 定义contextType
                    TodoItem.contextType = MyContext;

                    this.context.removeItem
                ```
            * 类组件或函数组件
            ```js
                <MyContext.Consumer>
                {
                    (value)=>{
                        // 在这里获取共享的数据
                    }
                }
                </MyContext.Consumer>
            ```
* 内容通讯:props.chidlren
    * String: 组件文本内容
    * Object: 虚拟节点
    * Array: 多个虚拟节点组成的数组
    * Undefined: 单标签或者无内容的情况下返回的值
    > 可以利用React.Children下的方法来处理props.chilren

* 属性的类型及校验
    > 设置propTypes静态属性
    * prop-types
        * string
        * bool
        * number
        * array
        * object
        * func
        * symbol
        * ....
        * isRequired 必填
* 设置props默认值
    > 设置defaultProps静态属性

> PS: props属性类型校验与默认值是组件开发过程中必要的操作,可以有效减少错误和给予用户友好的提示


* 生命周期(只有类组件才有生命周期)
    1. 初始化阶段: Initial
        * constructor
    2. 挂载阶段: Mounting
        * componentWillMount (不推荐)
        * componentDidMount
    3. 更新节点: Updating
        * componentWillUpdate (不推荐)
        * componentDidUpdate
    4. 销毁节点: Unmounting
        * componentWillUnmount

    * 特殊生命周函数
        * componentWillReceiveProps (不推荐)
        * shouldComponentUpdate
    * 了解每个生命周期函数在什么时候执行
    


## day6-1

### 面试题
* webpack如何实现多页面应用

### 复习
* React的生命周期
* Context
    1. 创建
        ```js
            const MyContext = React.createContext('jingjing')
        ```
    2. 共享数据
        ```js
            <MyContext.Provider value="laoxie">
            
            </MyContext.Provider>
        ```
    3. 接收
        * 类组件
            ```js
                // 设置静态属性
                Sub.contextType = MyContext
                // 获取
                this.context
            ```
        * Consumer
            ```js
                <MyContext.Consumer>
                    {
                        (value)=>{
                            return <div></div>
                        }
                    }
                </MyContext.Consumer>
            ```
* 数据类型校验
    > 使用官方模块: prop-types
    * 给组件设置静态属性: propTypes
* 设置props默认组
    * 给组件设置静态属性: defaultProps


### 知识点
* 路由
    * 多页面应用MPA     Multiple Page Application
    * 单页面应用SPA     Single Page Application
* 路由模式
    * hash
        > 利用hash值的来实现页面跳转
    * history(需要服务器的支持)
        > HTML5新特(对history对像进行增强)
            * go()/back()/forward()                 刷新页面
            * state / pushState()/replaceState()    不刷新页面

* 万物皆组件
    * HashRouter
    * Route
    * Link

* 导航
    * 声明式导航
    * 编程式导航
        * 跳转方式
            * history.push()
            * history.replace()
        * 路由对象(props.xxx)
            * history: 用于跳转
            * location:
            * match:
        * 获取方式
            * 通过Route渲染组件(如:`<Route path="/home" component={Home}/>`)
            * 通过高阶组件withRouter实现(推荐)
* 高阶组件
    * 设计模式: 装饰器模式
    * 纯函数
        > 不对传入的参数进行修改, 相同的参数永远返回一样的值
        ```js
            function pf(num){
                return num*num
            }

            pf(2);//4
            pf(2);//4

        ```


## day6-2

### 面试题
* 数组map方法的原理
```js
    let arr = [10,20,30];

    if(Array.prototype.map === undefined){
        Array.prototype.map = function(callback){
            var result = [];
            for(var i=0;i<this.length;i++){
                result.push(callback.call(this,this[i],i,this))
            }
            return result;
        }
    }

    let res = arr.map(function(item,idx,array){
        return item*2;
    });// [20,40,60]

```
* 如何取消ajax请求
```js
    // 1. 原生
    let xhr = new XMLHttpRequest();
    xhr.open('get','xxx',true);
    xhr.send();

    xhr.abort();

    // 2. axios
    const source = axios.CancelToken.source();
    axios.get(url,{
        cancelToken: source.token
    })

    // 在销毁生命周期函数中执行
    source.cancel()
```

### 复习
* ReactRouter4
    * 路由类型
        * HashRouter
        * BrowserRouter
    * 路由配置
        * Route
            * path
            * component
            * exact
            * render
        * Switch
        * Redirect
            * from
            * to
            * exact
    * 跳转
        * 声明式导航
            * Link
            * NavLink
                * to
        * 编程式导航
            * 路由对象
                * history
                    * push()
                    * replace()
                * location
                * match
            * 如何获取路由对象: props.xxx
                * withRouter
                * 通过Route渲染组件
* 高阶组件
    * 设计模式: 装饰器模式
    * ES7 @


### 知识点
* 动态路由
* 嵌套路由
    ```js

        new VueRouter({
            routes:[
                {
                    path:'/discover',
                    component:Discover,
                    children:[
                        {
                            path:'',
                            component:xxx
                        }
                    ]
                }
            ]
        })
    ```


## day6-4

### 知识点
* webpack测试环境下的文件都是在内存中运行