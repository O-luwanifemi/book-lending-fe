import {combineReducers} from 'redux'
import signupReducer from './signupReducer'
import shelfReducer from './shelfReducer'
import historyReducer from './historyReducer'

export default combineReducers({
    signupReducer,
    shelfReducer,
    historyReducer,
});