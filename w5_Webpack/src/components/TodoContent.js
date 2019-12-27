import React from 'react';

import TodoItem from './TodoItem'
// 往模块对象中添加TodoList属性
function TodoContent(props){
    console.log('TodoContent.props',props)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" checked={props.checkedAll} onChange={props.selectedAll}/>全选</th>
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
                        return <TodoItem 
                        key={item.id} 
                        data={item} 
                        idx={idx}
                        // removeItem={props.removeItem}
                        // completeItem={props.completeItem}
                        // selecteItem={props.selecteItem}
                        />
                    })
                    // [<TodoItem/>,<TodoItem/>,<TodoItem/>,<TodoItem/>]
                }
                </tbody>
            </table>
            <div>总数:{props.datalist.length}, 完成:{props.datalist.filter(item=>item.done).length}, 未完成:{props.datalist.filter(item=>!item.done).length}</div>
        </>
    )
}

// 往模块对象中添加default属性
export default TodoContent;