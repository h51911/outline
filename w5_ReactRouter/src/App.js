import React, { Component } from 'react';

import { HashRouter, Route, Link, NavLink, Switch, Redirect,withRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Reg from './pages/Reg';
import Goods from './pages/Goods';
import Cart from './pages/Cart';
import Discover from './pages/Discover';

import { Menu, Icon,Row,Col,Button } from 'antd';
import 'antd/dist/antd.css'
import './App.scss'

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
    }
    render() {
        let {menu,selectedKeys} = this.state;

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
                <Col span={18}>
                <Menu 
                mode="horizontal" 
                onSelect={this.changeMenu}
                selectedKeys={selectedKeys}
                theme="dark"
                >
                    {
                        menu.map(item=>{
                            return <Menu.Item key={item.path}>
                                {/* <NavLink to={item.path} activeStyle={{color:'#f00'}}> */}
                                    <Icon type={item.icon} />
                                    {item.text}
                                {/* </NavLink> */}
                            </Menu.Item>
                        })
                    }
                </Menu>
                </Col>
                <Col className="nav-link" span={6} style={{lineHeight:'46px',textAlign:'right'}}>
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
            
            <Switch>
                {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
                <Route path='/home' component={Home} />
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
        </div>
    }
}

// 高阶组件
App = withRouter(App)

export default App;