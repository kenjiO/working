console.log(''); console.log('');console.log('');console.log('');console.log('');console.log('')
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import { rootReducer } from './reducers'
import App from './app'


const enhancers = compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
    rootReducer,
    enhancers
)

render (
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)

var foo = Symbol('foo')
var bar = {[foo]: 99}

console.dir(bar)
console.log('----------')
console.log(bar[foo])