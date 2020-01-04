
import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducer';

import rootSaga from './saga'

// 1. 引入redux-saga
import createSagaMiddleware from 'redux-saga';

// 2.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

 // 3.将 sagaMiddleware 连接至 Store
 let enhancer = applyMiddleware(sagaMiddleware);
 console.log('enhancer:',enhancer)

//  调试工具与其他中间件的结合
let store = createStore(reducer,composeWithDevTools(enhancer));

// 使用多个中间件
// let store = createStore(reducer,compose(enhancer,composeWithDevTools()));

//  4.运行 Saga配置
sagaMiddleware.run(rootSaga);

export default store;