import React from 'react';
import ReactDOM from 'react-dom/client';
import { ENVIRONMENT } from 'app/constants';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from './mocks/server';

if (ENVIRONMENT === 'development') {
  makeServer();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
