import { footer } from '~/helpers/config';
import Footer from '../Comp/Footer/Footer';
import Header from '../Comp/Header/Header';
import { header } from '~/helpers/config';
import { Outlet } from 'react-router-dom';
function DefaultLayout() {
  return (
    <>
      <Header header={header} />
      <Outlet />
      <Footer footer={footer} />
    </>
  );
}

export default DefaultLayout;
