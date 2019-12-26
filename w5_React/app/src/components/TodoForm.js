import React, { Component } from 'react';

// 往模块对象中添加TodoList属性
class TodoForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            title:''
        }

        this.changeTitle = this.changeTitle.bind(this);
        this.additem = this.additem.bind(this);
    }
    changeTitle(event){
       this.setState({
           title:event.target.value
       }) 
    }
    additem(){

        this.props.addItem(this.state.title);

        // 清空并自动获得焦点
        this.setState({
            title:''
        });

        // 节点操作
        this.title.focus();
    }
    render(){
        // 在类组件中获取props: this.props
        let {addItem} = this.props;
        return (
            <div>
                {/* 给input的value添加数据,必须同时提供改变这个数据的方法 */}
                <input type="text" ref={(ele)=>this.title=ele} value={this.state.title} onChange={this.changeTitle} />
                <button onClick={this.additem}>添加</button>
            </div>
        )
    }

}

// 往模块对象中添加default属性
export default TodoForm;