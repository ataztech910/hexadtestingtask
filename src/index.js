import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
import * as RatingActions from './actions/ratings';
import App from './App';
import { configureStore } from './store/configureStore';
import myTimer from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore([], sagaMiddleware);


store.dispatch(RatingActions.fetchData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
sagaMiddleware.run(myTimer);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
