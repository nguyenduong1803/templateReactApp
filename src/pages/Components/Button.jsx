import React from 'react';
import Button from '~/components/Atom/Button/Button';
import ClickAnimate from '~/components/Atom/CickAnimate/ClickAnimate';
import { Col, Grid } from '~/layouts/Comp/GridSystem';
import Paper from '~/layouts/Styled/Paper';

function ButtonPage() {
  return (
    <div>
      <h2 className="main-title pl-24">2. Button</h2>
      <h3 className="pl-24 fz-24 fw-500">Basic Components</h3>
      <Paper className='m-24'>
        <Grid container="container-fluid my-24">
          <Col>
            <Button>Primary Button</Button>
            <p className="py-12"> Default Click</p>
          </Col>
          <Col>
            <ClickAnimate overflow="inherit">
              <Button bg="var(--text-danger)">Danger Button</Button>
            </ClickAnimate>
            <p className="py-12"> Animate Click</p>
          </Col>
          <Col>
            <ClickAnimate overflow="inherit">
              <Button bg="var(--text-success)">Success Button</Button>
            </ClickAnimate>
            <p className="py-12">Animate Click</p>
          </Col>
          <Col>
            <Button bg="var(--text-waring)">Click me</Button>
            <p className="py-12"> Default Click</p>
          </Col>
        </Grid>
      </Paper>
    </div>
  );
}

export default ButtonPage;
