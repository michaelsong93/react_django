import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router-dom';
import configStore from './store/store';
import createHistory from 'history/createBrowserHistory';

const store = configStore;


ReactDOM.render(
  <Provider store = {store}>
    <Router history = {createHistory()}>
      <Route path = "/" component={App}/>
    </Router>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
