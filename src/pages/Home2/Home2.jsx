import React from 'react';
import { Col, Row } from '~/layouts/Comp/GridSystem';
import Paper from '~/layouts/Styled/Paper';
import CharPie from './components/Molecule/CharPie';
import LinePie from './components/Molecule/LinePie';
import Reports from './components/Molecule/Reports';

function Home2() {
  return (
    <div className="container-fluid">
      <h2 className="main-title  mb-12">Hi, Welcome</h2>
      <Reports />
      <Row>
        <Col lg={8} md={8} sm={8}>
          <Paper r={10} elevation={8} className="p-24">
            <LinePie />
          </Paper>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <Paper r={10} elevation={8} p="2.4rem" className="p-24 h-100">
            <CharPie />
            <div>Sort</div>
          </Paper>
        </Col>
      </Row>
      <Row className="">
        <Col>
          <Paper r={10} elevation={8} className="p-24">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
              nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
              omnis iusto.
            </p>
          </Paper>
        </Col>
        <Col>
          <Paper r={10} elevation={8} className="p-24">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
              nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
              omnis iusto.
            </p>
          </Paper>
        </Col>
        <Col>
          <Paper r={10} elevation={8} className="p-24">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
              nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
              omnis iusto.
            </p>
          </Paper>
        </Col>
        <Col>
          <Paper r={10} elevation={8} className="p-24">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
              nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
              omnis iusto.
            </p>
          </Paper>
        </Col>
        <Col>
          <Paper r={10} elevation={8} className="p-24">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
              nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
              omnis iusto.
            </p>
          </Paper>
        </Col>
        <Col>
          <Paper r={10} elevation={8} className="p-24">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
              nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
              omnis iusto.
            </p>
          </Paper>
        </Col>
        <Col>
          <Paper r={10} elevation={8} className="p-24">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
              nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
              omnis iusto.
            </p>
          </Paper>
        </Col>
        <Col>
          <Paper r={10} elevation={8} className="p-24">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
              nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
              omnis iusto.
            </p>
          </Paper>
        </Col>
        <Col>
          <Paper r={10} elevation={8} className="p-24">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam et explicabo sint. Ab, reprehenderit
              nobis! Nihil sed ipsum, tenetur dolores voluptatem dicta numquam assumenda inventore quaerat rem soluta
              omnis iusto.
            </p>
          </Paper>
        </Col>
      </Row>
    </div>
  );
}

export default Home2;
