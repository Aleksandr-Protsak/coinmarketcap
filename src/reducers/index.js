import { combineReducers } from 'redux';
import Coins from './reducer';

const allReducers = combineReducers({
    coins: Coins
});

export default allReducers