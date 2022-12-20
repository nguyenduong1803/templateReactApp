import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
//
import Footer from '../Comp/Footer/Footer';
import Header from '../Comp/Header/Header';
import { footer, header } from '~/helpers/config';
import Grid from '../Comp/GridSystem/Grid';
import { Col } from '../Comp/GridSystem';
import Sidebar from './Sidebar';
function LayoutSidebar() {
  return (
    <>
      <Grid container="container-fluid" className="bg-default position-relative">
        <WrapSidebar lg={2} md={3}>
          <Sidebar />
        </WrapSidebar>
        <Col lg={10} md={9} sm={12}>
          <Header header={header} />
          <Outlet />
          <Footer footer={footer} />
        </Col>
      </Grid>
    </>
  );
}
const WrapSidebar = styled(Col)`
  background-color: #fff;
  box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%), 0 10px 10px rgb(90 97 105 / 6%),
    0 7px 70px rgb(90 97 105 / 10%);
`;
export default LayoutSidebar;
