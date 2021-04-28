import { combineReducers } from 'redux'
import loadReducer from './loadReducer'
import sendReducer from './sendReducer'
import deleteReducer from './deleteReducer'

export default combineReducers({
    loadReducer,
    sendReducer,
    deleteReducer
})