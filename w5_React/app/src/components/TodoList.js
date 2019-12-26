import React,{Component} from 'react';

import TodoForm from './TodoForm'
import TodoContent from './TodoContent'

// 往模块对象中添加TodoList属性
class TodoList extends Component{
    constructor(){
        super();

        this.state = {
            datalist: [
                {
                    id: Date.now(),
                    title: "明年实现月薪过万",
                    done: false,
                    selected: false
                },
                {
                    id: Date.now() + 10,
                    title: "男同学变成高富帅，迎娶白富美",
                    done: false,
                    selected: false
                },
                {
                    id: Date.now() + 20,
                    title: "女同学变成白富美，迎娶高富帅",
                    done: false,
                    selected: false
                }
            ]
        }

        // 在初始化是改变this指向(推荐)
        this.addItem = this.addItem.bind(this);
    }

    // 自定义方法
    // 在这里写的方法,会自动称为原型的方法
    addItem(title){console.log('title',title)
        // 注意:在react自定义函数中没有this

        // Vue的修改方式
        // this.state.datalist.push()

        // React的修改方式:覆盖
        // this.setSatate()
        let data = {
            id:Date.now(),
            title,
            done:false,
            selected:false
        }
        let datalist = this.state.datalist;
        datalist.unshift(data)
        this.setState({
            datalist
        })
    }

    render(){
        // 在这里如何获取state数据
        // render中的this指向实例
        console.log(this)
        return (
            <div>
                <TodoForm addItem={this.addItem}></TodoForm>
                <TodoContent datalist={this.state.datalist}></TodoContent>
            </div>
        )
    }
}

// 往模块对象中添加default属性
export default TodoList;