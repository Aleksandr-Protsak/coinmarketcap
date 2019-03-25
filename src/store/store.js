import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducer from '../reducers/index';

let store = createStore(allReducer, applyMiddleware(thunk));

export default store

