import {combineReducers} from 'redux'
import signupReducer from './signupReducer'
import shelfReducer from './shelfReducer'
import historyReducer from './historyReducer'
import bookReducer from './bookReducer'

export default combineReducers({
    signupReducer,
    shelfReducer,
    historyReducer,
    bookReducer,
});