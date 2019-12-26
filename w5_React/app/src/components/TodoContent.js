import React from 'react';

import TodoItem from './TodoItem'
// 往模块对象中添加TodoList属性
function TodoContent(props){
    console.log('TodoContent.props',props)
    return (
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox"/>全选</th>
                    <th>#</th>
                    <th>待办事项</th>
                    <th>是否完成</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
            {
               props.datalist.map(function(item,idx){
                // return <div>{item.title}</div>
                return <TodoItem key={item.id} data={item} idx={idx}/>
               })
            }
            </tbody>
        </table>
    )
}

// 往模块对象中添加default属性
export default TodoContent;