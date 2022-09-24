import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Li from './ex'
import 'bootstrap/dist/css/bootstrap.css';
import Navnew from './nav';
import { Provider } from 'react-redux';
import Body from './aru'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <Navnew/>
    <Li/>
    {/* <Body/> */}
    </React.StrictMode>
  </Provider>
);

