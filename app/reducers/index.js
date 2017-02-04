import { combineReducers } from 'redux'

import counterReducer from './counter-reducer'
import userReducer from './user-reducer'

export const rootReducer = combineReducers({
    counterData: counterReducer,
    userData: userReducer
})