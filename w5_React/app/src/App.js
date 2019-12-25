import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   let myClassName = 'H5-1911';
//   let handleClick = function () {
//     console.log('click')
//   }
//   let myStyle = { width: 100 }

//   return (
//     <>
//       <div id="container">
//         <h1>{myClassName}</h1>
//         <ul className="data">
//           <li>很帅</li>
//           <li>技术贼高</li>
//         </ul>
//         <label htmlFor="username">用户名：</label>
//         <input type="text" id="username" />
//         {
//           //<img src="/img/laoxie.jpg" style={myStyle}/>
//         }
//         <img src="/img/g3.jpg" style={myStyle} />
//         <button onClick={handleClick}>点我</button>
//       </div>
//       <div>jingjing</div>
//     </>
//   )
// }

class App extends React.Component{
  constructor(){
    super();//Parent.call(this)
    // 调用super后才拥有自己的this

    // 状态（组件自己的数据）
    this.state = {

    }
  }
  render(){
    return (
      <div>
        <img src="/img/jingjing.png"/>
      </div>
    )
  }
}

export default App;
