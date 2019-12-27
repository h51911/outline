import React from 'react';
import MyContext from '../context';

import Button from './TodoButton'

// 往模块对象中添加TodoList属性
function TodoItem({data,idx}){

    return (
        <MyContext.Consumer>
        {
            (value)=>{
                console.log('value:',value)
                let {removeItem,completeItem,selecteItem} = value;
                return (
                    <tr>
                        <td>
                            <input type="checkbox" checked={data.selected} onChange={selecteItem.bind(null,data.id)}/>
                        </td>
                        <td>{idx+1}</td>
                        <td>{data.title}</td>
                        <td>{data.done ? '是':'否'}</td>
                        <td>
                            {/* <button onClick={completeItem.bind(null,data.id)}>完成</button>
                            <button onClick={removeItem.bind(null,data.id)}>删除</button> */}
                            {/* React.createElement('strong',null,'完成') */}
                            <Button onClick={completeItem.bind(null,data.id)}>完成</Button>
                            <Button onClick={removeItem.bind(null,data.id)}>删除</Button>
                        </td>
                    </tr>
                )
            }
        }
        </MyContext.Consumer>
    )
}

// class TodoItem extends React.Component{
//     render(){
//         let {data,idx} = this.props;
//         let {removeItem,completeItem,selecteItem} = this.context;

//         console.log('todoItem:',this.context)
//         return (
//             <tr>
//                 <td>
//                     <input type="checkbox" checked={data.selected} onChange={selecteItem.bind(null,data.id)}/>
//                 </td>
//                 <td>{idx+1}</td>
//                 <td>{data.title}</td>
//                 <td>{data.done ? '是':'否'}</td>
//                 <td>
//                     <button onClick={completeItem.bind(null,data.id)}>完成</button>
//                     <button onClick={removeItem.bind(null,data.id)}>删除</button>
//                 </td>
//             </tr>
//         )
//     }
// }

// TodoItem.contextType = MyContext;

// 往模块对象中添加default属性
export default TodoItem;