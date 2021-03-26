import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import rootReducer from "./Store/Reducers/RootReducer";

const middleware = applyMiddleware(promise,thunk);
const store = createStore(rootReducer,middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);