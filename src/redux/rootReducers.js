import { combineReducers } from 'redux';
import shopReducer from './../redux/Shopping/shopping-reducers'

const rootReducers = combineReducers({
    shop:shopReducer,
});

export default rootReducers;