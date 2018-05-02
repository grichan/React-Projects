import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';// will get index vecause not speccified


import App from './App';


const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
 document.getElementById('root'));

//Provider is react-redux connector
/* 
    we pass to    <Provider store={createStoreWithMiddleware()}> 
    reducers they are in reducers/index.js
*/