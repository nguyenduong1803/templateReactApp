import { DefaultLayout } from './layouts';
import GlobalStyle from '~/layouts/GlobalStyle';
import { publicRouter } from '~/helpers/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
   return (
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
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </Router>
      </GlobalStyle>
   );
}
export default App;
