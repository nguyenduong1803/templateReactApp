import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from '~/styles';
import { RouterSite } from '~/helpers/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from '~/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <RouterSite />
        </Router>
      </Suspense>
    </GlobalStyle>
  </React.StrictMode>
);
reportWebVitals();
