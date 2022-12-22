import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
//
import Footer from '../Comp/Footer/Footer';
import Header from '../Comp/Header/Header';
import Sidebar from './Sidebar';
import { footer } from '~/helpers/config';
import { Box, Grid } from '../Comp/GridSystem';
function LayoutSidebar() {
  return (
    <>
      <Box className="bg-default ">
        <WrapSidebar className="vh-100 position-fixed t-0 p-12" w="300px">
          <Sidebar />
        </WrapSidebar>
        <Box className='space-sidebar'>
          <Grid container="container-fluid p-0" style={{margin:"0 0 65px 0"}}>
            <Header />
          </Grid>
          <Outlet />
          <Footer footer={footer} />
        </Box >
      </Box>
    </>
  );
}
const WrapSidebar = styled(Box)`
  background-color: #fff;
  box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%), 0 10px 10px rgb(90 97 105 / 6%),
    0 7px 70px rgb(90 97 105 / 10%);
    z-index: 200;
`;
export default LayoutSidebar;
