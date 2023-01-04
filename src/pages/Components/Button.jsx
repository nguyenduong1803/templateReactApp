import React from 'react';
import Button from '~/components/Atom/Button/Button';
import ButtonRipple from '~/components/Atom/Button/ButtonRipple';
import ButtonSank from '~/components/Atom/Button/ButtonSank';
import { Col, Container, Grid } from '~/layouts/Comp/GridSystem';

function ButtonPage() {
  return (
    <div>
      <h2 className="main-title pl-24">Button</h2>
      <Container >
        <Col>
          <Button variant="outline" bg="var(--va )">
            Primary Button
          </Button>
          <Button>Primary Button</Button>
          <p className="py-12"> Default Click</p>
        </Col>
        <Col>
          <ButtonRipple variant="outline" bg="var(--text-danger)">
            Danger
          </ButtonRipple>
          <ButtonRipple variant="text" bg="var(--text-success)">
            Success
          </ButtonRipple>
          <ButtonRipple>Primary </ButtonRipple>
          <p className="py-12"> Animate Click</p>
        </Col>
        <Col>
          <ButtonSank bg="var(--text-success)">Success Button</ButtonSank>
          <p className="py-12">Animate Click</p>
        </Col>
        <Col>
          <Button bg="var(--text-warning)">Click me</Button>
          <p className="py-12"> Default Click</p>
        </Col>
      </Contain>
    </div>
  );
}

export default ButtonPage;
