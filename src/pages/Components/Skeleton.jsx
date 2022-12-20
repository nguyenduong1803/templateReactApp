import React from 'react';
import Skeleton from '~/components/Atom/Skeleton/Skeleton';
import { Col, Grid } from '~/layouts/Comp/GridSystem';

function SkeletonPage() {
  return (
    <div>
      <Grid container='container-fluid'>
        <Col>
          <Skeleton />
        </Col>
        <Col>
          <Skeleton />
        </Col>
        <Col>
          <Skeleton />
        </Col>
        <Col>
          <Skeleton />
        </Col>
      </Grid>
    </div>
  );
}

export default SkeletonPage;
