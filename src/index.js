import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from './reducers/index'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/main.css';

const container = document.getElementById('root');
const root = createRoot(container);

const middleware = [thunk];
const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
