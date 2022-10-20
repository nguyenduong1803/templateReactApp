import React from 'react';
import ReactDOM from 'react-dom/client';
import { DefaultLayout } from './layouts';
import GlobalStyle from '~/layouts/GlobalStyles';
import { publicRouter } from '~/helpers/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from '~/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <GlobalStyle>
         <Router>
            <Routes>
               {publicRouter.map((route, index) => {
                  const Page = route.component;
                  const Layout = route.layout || DefaultLayout;
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={<Layout><Page /></Layout>}
                     />
                  );
               })}
            </Routes>
         </Router>
      </GlobalStyle>
 </React.StrictMode>,
);
reportWebVitals();
