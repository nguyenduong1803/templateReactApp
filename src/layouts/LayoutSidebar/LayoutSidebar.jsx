import React from 'react';
import { Outlet } from 'react-router-dom';
//
import Footer from '../Comp/Footer/Footer';
import Header from '../Comp/Header/Header';
import Sidebar from './Sidebar';
import { footer } from '~/helpers/config';
import { Box, Col, Grid } from '../Grid';
import Position from '../Grid/Position';
import Paper from '../Styled/Paper';
import Addendum from './Addendum';
function LayoutSidebar() {
  return (
    <>
      <div className='bg-default'>
        <Paper elevation={8} className='vh-100 position-fixed t-0 p-12 zIndex-200' w='300px'>
          <Sidebar />
        </Paper>
        <div className='space-sidebar'>
          <Grid size='fluid' style={{ margin: '0 0 65px 0' }}>
            <Header />
          </Grid>
          <Grid size='fluid'>
            <Col lg={9} sm={12}>
              <Outlet />
            </Col>
            <Col lg={3} md={0}>
              <Addendum />
            </Col>
          </Grid>
          <Footer footer={footer} />
        </div>
        <Box w='20rem' bg='var(--white)'>
          <Position className='vh-100 position-fixed t-0 p-12' w='300px'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, quae ullam? Nam quod a illum provident,
            excepturi eveniet aliquam delectus repellat cumque optio quaerat fugit blanditiis quidem doloribus inventore
            similique.
          </Position>
        </Box>
      </div>
    </>
  );
}
export default LayoutSidebar;
