import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import reducers from './reducers/reducers'
import App from './components/App'

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const initialState = {
  todos: [
    {id: 0, text: "item 1", completed: false}
  ],
  visibilityFilter: "SHOW_ALL"
}

const store = createStore(
    reducers,
    initialState,
    enhancers
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)