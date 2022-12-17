import React from 'react';
import { Outlet } from 'react-router-dom';
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
         <Header header={header} />
         <Grid container="container-fluid bg-default">
            <Col lg={3} md={3}>
               <Sidebar />
            </Col>
            <Col lg={9} md={9} sm={12}>
               <Outlet />
               <Footer footer={footer} />
            </Col>
         </Grid>

      </>
   );
}

export default LayoutSidebar;
