//console.log(''); console.log('');console.log('');console.log('');console.log('');console.log('')
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import { rootReducer } from './reducers/'
import App from './components/App'


const enhancers = compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
    rootReducer,
    enhancers
)
// console.log('After createStore() store is...')
// console.log(store.getState())

render (
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
