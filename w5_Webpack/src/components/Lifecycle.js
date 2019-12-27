import React from 'react';

class Lifecycle extends React.Component{
    constructor(){
        super();
        console.log('constructor')

        this.state = {
            qty:1
        }

        this.changeQty = this.changeQty.bind(this);
    }
    changeQty(){
        this.setState({
            qty:this.state.qty+1
        })
    }
    // componentWillMount(){
    //     console.log('componentWillMount')
    // }
    componentDidMount(){
        console.log('componentDidMount');

    }
    // componentWillUpdate(){
    //     console.log('componentWillUpdate')
    // }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate',prevState.qty,this.state.qty);

        // 监听qty的修改, 发起ajax请求获取库存数量
        // 慎重在这里修改state,避免死循环
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    // 特殊生命周期函数
    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps')
    // }

    // 重要: 一般用于组件性能优化
    shouldComponentUpdate(nextProps, nextState){
        // nextProps, nextState: 将要修改的props,state
        console.log('shouldComponentUpdate',nextState.qty, this.state.qty);
        return true;
        if(nextState.qty%5===0){
            return true;
        }else{
            return false
        }
    }
    render(){
        console.log('render')
        return <div>
            <h1>生命周期函数测试</h1>
            <button onClick={this.changeQty}>修改数量{this.state.qty}</button>
        </div>
    }
}

export default Lifecycle;