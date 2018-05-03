import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // redux
import {applyMiddleware, createStore} from 'redux'; // redux
import promiseMiddleware from 'redux-promise';

import {BrowserRouter, Route} from 'react-router-dom';
import './app.css'

import reducers from './reducers'; // redux

// COMPONENTS
import App from './components/app';
import Car from './containers/car';


const creareStoreWirhMiddleware = applyMiddleware(promiseMiddleware)(createStore) //redux

ReactDOM.render(
    <Provider store={creareStoreWirhMiddleware(reducers)} /* redux */>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={App}></Route>
                <Route exact path='/car/:id' component={Car}></Route>
            </div>
        </BrowserRouter>

    </Provider> 
, document.getElementById('root'));
  