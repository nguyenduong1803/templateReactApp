import Footer from '../InnerComponents/Footer/Footer';
import Header from '../InnerComponents/Header/Header';

function DefaultLayout({ children }) {
   return (
      <div className="container">
         <Header />
         <main className="row"> {children}</main>
         <Footer />
      </div>
   );
}

export default DefaultLayout;
