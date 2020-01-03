
import {createStore,applyMiddleware} from 'redux';

import reducer from './reducer';

import rootSaga from './saga'

// 1. 引入redux-saga
import createSagaMiddleware from 'redux-saga';

// 2.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

 // 3.将 sagaMiddleware 连接至 Store
 let enhancer = applyMiddleware(sagaMiddleware);
 console.log('enhancer:',enhancer)

let store = createStore(reducer,enhancer);

//  4.运行 Saga配置
sagaMiddleware.run(rootSaga);

export default store;