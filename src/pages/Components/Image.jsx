import React from 'react';
import Image from '~/components/Atom/Image/Image';
import OptimizeImage from '~/components/Atom/Image/OptimizeImage';
import { Col, Grid } from '~/layouts/Comp/GridSystem';
import Paper from '~/layouts/Styled/Paper';
const listImage = [
  { path: 'https://freepik.cdnpk.net/img/coupon/adobe/EN_3.jpg', width: 300 },
  {
    path: 'https://img.freepik.com/free-photo/close-up-seafoo…s-shrimp-mussels_140725-4993.jpg?size=338&ext=jpg',
    width: 740,
  },
  {
    path: 'https://img.freepik.com/free-photo/top-view-french-fries-with-ketchup_23-2149160033.jpg?w=826&t=st=1668589808~exp=1668590408~hmac=bce9393755b60bc5b7ad1129f4744f2ff1399a513e75354705459120bd8f1606',
    width: 1040,
  },
];
function ImagePage() {
  return (
    <div className=" my-24">
      <Grid container="container-fluid">
        <Col sm={3}>
          <Paper className="border radius-6 p-12">
            <Image src="" />
            <p>Default Image error</p>
          </Paper>
        </Col>
        <Col sm={3}>
          <Paper className="d-flex flex-direction-column h-100 j-between border radius-6 p-12">
            <Image
              h="200px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <p>Image basic</p>
          </Paper>
        </Col>
        <Col sm={3}>
          <Paper className=" d-flex flex-direction-column j-between h-100 border radius-6 p-12">
            <OptimizeImage listImage={listImage} src="" />
            <p> Optimize with desktop tablet and mobile</p>
          </Paper>
        </Col>
        <Col sm={3}>
          <Paper className="d-flex flex-direction-column h-100 j-between border radius-6 p-12">
            <Image
              h="200px"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <p>Image basic</p>
          </Paper>
        </Col>
      </Grid>
    </div>
  );
}

export default ImagePage;
