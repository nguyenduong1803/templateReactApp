import { footer } from '~/helpers/config';
import Footer from '../Comp/Footer/Footer';
import Header from '../Comp/Header/Header';
import { header } from '~/helpers/config';

function DefaultLayout({ children }) {
  return (
    <>
      <Header header={header} />
      <main className="container"> {children}</main>
      <Footer footer={footer} />
    </>
  );
}

export default DefaultLayout;
