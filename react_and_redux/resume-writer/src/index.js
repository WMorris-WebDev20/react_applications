import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore } from 'redux'
import {Provider} from 'react-redux'
import combine from './reducers/combine'
import {BrowserRouter as Router} from 'react-router-dom'

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

const store = createStore( combine ,persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })
ReactDOM.render(
  <Router>
    <Provider store = {store}>
        <App />
     </Provider>
  </Router>,
  document.getElementById('root')
);
