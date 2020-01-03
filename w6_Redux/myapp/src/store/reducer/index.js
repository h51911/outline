import {combineReducers} from 'redux';

import userReducer from './user';
import cartReducer from './cart';

const rootReducer = {
    user:userReducer,
    cart:cartReducer
}

export default combineReducers(rootReducer);