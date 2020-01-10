import React, { Component,lazy,Suspense } from 'react';

import { HashRouter, Route, Link, NavLink, Switch, Redirect,withRouter } from 'react-router-dom';

// 传统写法
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Reg from './pages/Reg';
// import Goods from './pages/Goods';
// import Cart from './pages/Cart';
// import Discover from './pages/Discover';

// 路由懒加载：在切换到这个页面是才加载相应的路由组件
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Reg = lazy(() => import("./pages/Reg"));
const Goods = lazy(() => import("./pages/Goods"));
const Cart = lazy(() => import("./pages/Cart"));
const Discover = lazy(() => import("./pages/Discover"));

// antd全部引入
// import { Menu, Icon,Row,Col,Button,Badge } from 'antd';
// import 'antd/dist/antd.css'
import './App.scss';

// antd按需加载
// import Menu from 'antd/es/menu';
// import 'antd/es/menu/style/css'
// import Icon from 'antd/es/ico';
// import 'antd/es/icon/style/css'

// 利用babel-plugin-import插件实现按需加载
import { Menu, Icon,Row,Col,Button,Badge } from 'antd';

import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedKeys:['/home'],
            menu: [{
                name: 'home',
                path: '/home',
                text: '首页',
                icon:'home'
            },{
                name: 'discover',
                path: '/discover',
                text: '发现',
                icon:'compass'
            }, {
                name: 'cart',
                path: '/cart',
                text: '购物车',
                icon:'shopping-cart'
            }]
        }

        this.changeMenu = this.changeMenu.bind(this);
        this.goto = this.goto.bind(this);
    }
    changeMenu(current){
        let {key} = current;
        
        this.props.history.push(key);

        this.setState({
            selectedKeys:[key]
        })
    }
    goto(path){
        this.props.history.push(path)
    }
    componentDidMount(){
        console.log(this.props.location.pathname)
        this.setState({
            selectedKeys:[this.props.location.pathname]
        })

        // 监听store数据修改
        // store.subscribe(()=>{
        //     console.log('修改：',store.getState())
        //     // 强制刷新组件（手动刷新组件）
        //     this.forceUpdate();
        // })
    }
    render() {
        let {menu,selectedKeys} = this.state;
        let {cartlist} = this.props;
        console.log('App:',this.props)
        return <div>
            {/* <ul>
                {
                    this.state.menu.map(item=>{
                        return <li key={item.name}>
                            <NavLink to={item.path} activeStyle={{color:'#f00'}}>{item.text}</NavLink>
                        </li>
                    })
                }
            </ul> */}
            <Row style={{backgroundColor:'#001529'}}>
                <Col span={14}>
                <Menu 
                mode="horizontal" 
                onSelect={this.changeMenu}
                selectedKeys={selectedKeys}
                theme="dark"
                >
                    {
                        menu.map(item=>{
                            return <Menu.Item key={item.path}>
                                {
                                    item.name === 'cart' ?
                                    <Badge count={cartlist.length}>
                                        <Icon type={item.icon} />
                                        {item.text}
                                    </Badge>
                                    :
                                    <>
                                        <Icon type={item.icon} />
                                        {item.text}
                                    </>
                                }
                            </Menu.Item>
                        })
                    }
                </Menu>
                </Col>
                <Col className="nav-link" span={10} style={{lineHeight:'46px',textAlign:'right'}}>
                    <Button 
                    type="link" 
                    icon="login"
                    onClick={this.goto.bind(this,'/login')}
                    >登录</Button>
                    <Button 
                    type="link"
                    icon="user-add"
                    onClick={this.goto.bind(this,'/reg')}
                    >注册</Button>
                </Col>
            </Row>
            <Suspense fallback={<div>loading...</div>}>
                <Switch>
                    {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
                    <Route path='/home' component={Home} />
                    {/* /discover/phone */}
                    <Route path='/discover' component={Discover} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/goods/:id' component={Goods} />
                    <Route path='/login' component={Login} />
                    <Route path='/reg' component={Reg} />
                    <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />

                    {/* "/" 跳转到 "/home" */}
                    <Redirect from="/" to="/home" exact />
                    {/* 404 */}
                    <Redirect to="/notfound" />
                    {/* <Route path="/" component={Home}/> */}
                </Switch>
            </Suspense>
        </div>
    }
}

const mapStateToProps = function(state){console.log('state:',state)
    // 需要传递什么数据到组件的props就返回什么
    return {
        cartlist:state.cart.cartlist
    }
}

// 函数柯里化
App = connect(mapStateToProps)(App);//

// 高阶组件
App = withRouter(App)

export default App;