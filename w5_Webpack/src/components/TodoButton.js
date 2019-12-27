import React from 'react';

const TodoButton = (props)=>{
    // console.log('Button:',props.children,React.Children);
    // React.Children.forEach(props.children,function(item,idx){
    //     console.log(item,idx,arr)
    // })
    return (
        <button onClick={props.onClick}>{props.children}</button>
    )
}

export default TodoButton;