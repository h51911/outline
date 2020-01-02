import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter,Route} from 'react-router-dom';
import store from './store'

import App from './App';

render(
    <Provider store={store}>
        <HashRouter>
            <App/>
            {/* <Route component={App}/> */}
        </HashRouter>
    </Provider>
    ,
    document.querySelector('#app')
)