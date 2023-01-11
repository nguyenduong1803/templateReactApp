import React from 'react';
import GlobalStyle from '~/styles';
import { RouterSite } from '~/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleBaseLine from './styles/StyleBaseLine';

function App() {
  return (
    <GlobalStyle>
      <StyleBaseLine />
      <Router>
        <RouterSite />
      </Router>
    </GlobalStyle>
  );
}

export default App;
