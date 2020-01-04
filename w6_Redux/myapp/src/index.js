import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter,BrowserRouter} from 'react-router-dom';
import store from './store'

import App from './App';

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

render(
    <Provider store={store}>
        <Router>
            <App/>
            {/* <Route component={App}/> */}
        </Router>
    </Provider>
    ,
    document.querySelector('#app')
)