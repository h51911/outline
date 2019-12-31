import React,{Component} from 'react';

import Api from '@/api';
console.log('Api:',Api)

class Goods extends Component{
    componentDidMount(){
        let {id} = this.props.match.params;

        // 发起ajax请求获取当前商品数据
    }
    render(){
       
        return <div>

           Goods

        </div>
    }
}

export default Goods;