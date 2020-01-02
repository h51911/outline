import React,{Component} from 'react';
import { Switch,Tabs } from 'antd';
import Api from '@/api'
import {Route} from 'react-router-dom'
import List from './List';

class Discover extends Component{
    state = {
        currentIdx:0,//高亮索引值
        activeKey:'',
        menu:[]
    }
    changeType = (activeKey)=>{
        this.props.history.replace('/discover/'+activeKey);
    }
    async componentDidMount(){
        let {currentIdx} = this.state;
        let {datas} = await Api.get({
            act:'goods_class'
        });
        console.log('datas:',datas)
        // 获取高亮tab对应的id值
        let activeKey = datas.class_list[currentIdx].gc_id

        this.setState({
            menu:datas.class_list,
            activeKey
        });

        // 请求第一个tab对应的数据
        this.changeType(activeKey);
    }
    render(){
        let {match} = this.props;
        let {menu,activeKey} = this.state;
        return <div>

           {/* <Switch>
               <Route path={match.path+'/phone'} component={Phone}/>
               <Route path={match.path+'/computer'} component={Computer}/>
               <Route path={match.path+'/acc'} component={Acc}/>
            </Switch> */}

                <Tabs 
                defaultActiveKey={activeKey} 
                tabPosition='top'
                onChange={this.changeType}
                >
                    {menu.map((item,idx) => (
                        <Tabs.TabPane tab={item.gc_name} key={item.gc_id}>
                            {/* 动态路由，嵌套路由 */}
                            <Route path={match.path+"/:gc_id"} component={List} />
                        </Tabs.TabPane>
                    ))}
                </Tabs>
        </div>
    }
}

export default Discover;