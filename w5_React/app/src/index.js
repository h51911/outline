import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// let myClassName = 'H5-1911';
// let handleClick = function(){
//     console.log('click')
// }
// let myStyle = {width:100}

ReactDOM.render(
    // 组件
    <App/>

    // JS
    // React.createElement(
    //     'div',
    //     {id:'container'},
    //     [
    //         React.createElement('h1',null,'laoxie真帅'),
    //         React.createElement(
    //             'ul',
    //             null,
    //             [
    //                 React.createElement('li',null,'帅'),
    //                 React.createElement('li',null,'技术高'),
    //             ]
    //         )
    //     ]
    // )

    // JSX
    // <div id="container">
    //     <h1>{myClassName}</h1>
    //     <ul className="data">
    //         <li>很帅</li>
    //         <li>技术贼高</li>
    //     </ul>
    //     <label htmlFor="username">用户名：</label>
    //     <input type="text" id="username"/>
    //     {
    //     //<img src="/img/laoxie.jpg" style={myStyle}/>
    //     }
    //     <img src="/img/g3.jpg" style={myStyle}/>
    //     <button onClick={handleClick}>点我</button>
    // </div>
    , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
