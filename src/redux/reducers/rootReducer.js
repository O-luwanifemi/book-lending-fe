import {combineReducers} from 'redux'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import shelfReducer from './shelfReducer'
import historyReducer from './historyReducer'
import bookReducer from './bookReducer'

export default combineReducers({
    auth: loginReducer,
    signupReducer,
    shelfReducer,
    historyReducer,
    bookReducer,
});