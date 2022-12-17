import React from 'react';
import { Outlet } from 'react-router-dom';
// 
import Footer from '../Comp/Footer/Footer';
import Header from '../Comp/Header/Header';
import { footer, header } from '~/helpers/config';
import Grid from '../Comp/GridSystem/Grid';
import { Col } from '../Comp/GridSystem';
import { Shape } from '../Styled/Shapes/Shape';
function LayoutSidebar() {
   return (
      <>
         <Header header={header} />
         <Grid container="container-fluid">
            <Col >
               <Shape >
                  side bar
               </Shape>
            </Col>
            <Col lg={8} md={8} sm={12}>
               <Outlet />
            </Col>
         </Grid>
         <Footer footer={footer} />
      </>
   );
}

export default LayoutSidebar;
