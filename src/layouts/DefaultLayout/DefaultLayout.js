import Footer from '../Comp/Footer/Footer';
import Header from '../Comp/Header/Header';

function DefaultLayout({ children }) {
   return (
      <div className="container">
         <Header />
         <main>  {children}</main>
         <Footer />
      </div>
   );
}

export default DefaultLayout;
