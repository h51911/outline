import React from 'react';


// 往模块对象中添加TodoList属性
function TodoItem({data,idx}){
    return (
        <tr>
            <td>
                <input type="checkbox"/>
            </td>
            <td>{idx+1}</td>
            <td>{data.title}</td>
            <td>{data.done ? '是':'否'}</td>
            <td>
                <button>完成</button>
                <button>删除</button>
            </td>
        </tr>
    )
}

// 往模块对象中添加default属性
export default TodoItem;