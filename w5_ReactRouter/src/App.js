import React,{Component} from 'react';

import {HashRouter,Route,Link} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Reg from './pages/Reg';


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            menu:[{
                name:'home',
                path:'/home',
                text:'首页'
            },{
                name:'login',
                path:'/login',
                text:'登录'
            },{
                name:'reg',
                path:'/reg',
                text:'注册'
            }]
        }
    }
    render(){
        return <div>
            <h1>ReactRouter4 测试</h1>
            <ul>
                {
                    this.state.menu.map(item=>{
                        return <li key={item.name}><Link to={item.path}>{item.text}</Link></li>
                    })
                }
            </ul>
            
                {/* 路由配置,当浏览器路径为path时,渲染component组件 */}
                <Route path='/home' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/reg' component={Reg}/>
        </div>
    }
}

export default App;