import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HarperDBProvider } from 'use-harperdb';


ReactDOM.render(
  <React.StrictMode>
    <HarperDBProvider
    url={process.env.REACT_APP_DB_URL}
    user={process.env.REACT_APP_USER}
    password={process.env.REACT_APP_PASSWORD}
    >
      <App />
    </HarperDBProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
