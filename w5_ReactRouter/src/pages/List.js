import React from 'react';
import { Tabs } from 'antd';
import Api from '@/api'
import Goodslist from '~/GoodsList'

class List extends React.Component{
    state = {
        menu:[],
        activeKey:'',
        datalist:[]
    }
    changeType = async (gc_id)=>{
        // 
        let {datas} = await Api.get({
            act:'goods',
            op:'goods_list',
            gc_id,
            page:20
        });

        this.setState({
            datalist:datas.goods_list,
            activeKey:gc_id
        })
    }
    async componentDidMount(){
        let {gc_id} = this.props.match.params
        console.log('List:',gc_id);

        let {datas} = await Api.get({
            act:'goods_class',
            op:'get_child_all',
            gc_id
        });

        let menu = datas.class_list[0].child;

        // 默认获取第一个tab的数据
        let categoryId = menu[0].gc_id;
        this.changeType(categoryId);

        this.setState({
            menu
        })

    }
    render(){
        let {activeKey,menu,datalist} = this.state;
        return (
            <div>
               <Tabs 
                defaultActiveKey={activeKey} 
                tabPosition='left'
                onChange={this.changeType}
                >
                    {menu.map((item,idx) => (
                        <Tabs.TabPane tab={item.gc_name} key={item.gc_id}>
                            
                           {/*  当前tab的数据*/}
                            <Goodslist datalist={datalist}/>
                        </Tabs.TabPane>
                    ))}
                </Tabs> 
            </div>
        )
    }
}

export default List;