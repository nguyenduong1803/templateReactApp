import React from 'react';
import { Col, Row } from '~/layouts/Comp/GridSystem';
import Paper from '~/layouts/Styled/Paper';
import CharPie from './components/Molecule/CharPie';
import LinePie from './components/Molecule/LinePie';
import Reports from './components/Molecule/Reports';

function Home2() {
  return (
    <div className="container-fluid">
      <h2 className="main-title">Hi, Welcome</h2>
      <Reports />
      <Row>
        <Col lg={8} md={8} sm={8}>
          <Paper r={10} elevation={8} className="p-24">
            <LinePie />
          </Paper>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <Paper r={10} elevation={8} p={'3.6rem'} className="h-100 m-0-auto">
            <CharPie />
            <div>Sort</div>
          </Paper>
        </Col>
      </Row>
    </div>
  );
}

export default Home2;
