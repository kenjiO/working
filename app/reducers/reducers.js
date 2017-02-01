// root reducer. gets used in redux.createStore()
import { combineReducers } from 'redux'

import todos from './todos-reducer'                         //function(state, action) returns state
import visibilityFilter from './visibilityFilter-reducer'   //function(state, action) returns state

const reducers = combineReducers({
  todos,
  visibilityFilter
})

export default reducers