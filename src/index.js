import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../src/saga/sagaApi';

import allReducers from './reducers/index'

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    allReducers, 
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)


ReactDOM.render(
<Provider store={store}>
<App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
