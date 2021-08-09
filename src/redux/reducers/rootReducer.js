import {combineReducers} from 'redux'
import shelfReducer from './shelfReducer'
import historyReducer from './historyReducer'

export default combineReducers({
    shelfReducer,
    historyReducer,
});