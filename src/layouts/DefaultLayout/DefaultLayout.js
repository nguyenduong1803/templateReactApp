import Footer from '../Comp/Footer/Footer';
import Header from '../Comp/Header/Header';

function DefaultLayout({ children }) {
   return (
      <>
         <Header />
         <main className="container">  {children}</main>
         <Footer />
      </>
   );
}

export default DefaultLayout;
