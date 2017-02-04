import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';



export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
};

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware
// )(createStore);

// export default function configureStore(initialState) {
//   const store = createStoreWithMiddleware(rootReducer, initialState);
//   return store;
// };
