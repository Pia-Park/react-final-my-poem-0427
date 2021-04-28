import { combineReducers } from 'redux'
import loadReducer from './loadReducer'
import sendReducer from './sendReducer'
import deleteReducer from './deleteReducer'

const rootReducer = combineReducers({
    loadReducer,
    sendReducer,
    deleteReducer
})

export default rootReducer
