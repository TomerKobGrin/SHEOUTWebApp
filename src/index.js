import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, {Api} from 'aws-amplify'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import createStore from './Redux'
import amplifyConfig from './aws-exports'

const store = createStore()
Amplify.configure(amplifyConfig)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
