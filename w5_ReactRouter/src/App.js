import React, { Component } from 'react';

import { HashRouter, Route, Link, NavLink, Switch, Redirect,withRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Reg from './pages/Reg';

import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css'


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
            }, {
                name: 'login',
                path: '/login',
                text: '登录',
                icon:'login'
            }, {
                name: 'reg',
                path: '/reg',
                text: '注册',
                icon:'user-add'
            }]
        }

        this.changeMenu = this.changeMenu.bind(this);
    }
    changeMenu(current){
        let {key} = current;
        
        this.props.history.push(key);

        this.setState({
            selectedKeys:[key]
        })
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
            <Switch>
                {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
                <Route path='/home' component={Home} />
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