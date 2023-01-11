import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '~/reportWebVitals';
import App from './app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
reportWebVitals();
