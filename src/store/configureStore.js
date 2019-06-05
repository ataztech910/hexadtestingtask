import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// Import the root reducer
import rootReducer from '../reducers/rating';

// Configuring the Store. PreloadState is the initial State.
export function configureStore(preloadedState, sagaMiddleware) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      sagaMiddleware,
    ),
  );
}
