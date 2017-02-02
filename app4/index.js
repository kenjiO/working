import 'babel-polyfill'
//import createLogger from 'redux-logger'
import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import { selectSubreddit, fetchPostsIfNeeded } from './actions'
import rootReducer from './reducers'

const enhancers = compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
    rootReducer,
    enhancers
)

let selectSubredditResult = selectSubreddit('reactjs')
store.dispatch(selectSubredditResult)

let fetchPostsIfNeededResult = fetchPostsIfNeeded('reactjs')
let prom = store.dispatch(fetchPostsIfNeededResult)

prom.then((x) =>
  console.log(store.getState())
)