import React from 'react';
import styled from 'styled-components';
import Button from '~/components/Atom/Button/Button';
import ButtonRipple from '~/components/Atom/Button/ButtonRipple';
import ButtonSank from '~/components/Atom/Button/ButtonSank';
import Ripple from '~/components/Atom/Ripple/Ripple';
import { Col, Container } from '~/layouts/Comp/GridSystem';

function ButtonPage() {
  const hanldeClick = () => {
    console.log('click');
  };
  return (
    <div>
      <h2 className='main-title pl-24'>Button</h2>
      <Container>
        <Col>
          <Button onClick={hanldeClick}>
            Primary
            <Ripple color={'rgba(255, 255, 255,0.5)'} duration={1500} />
          </Button>
        </Col>
        <Col>
          <Button variant='outline' bg='var(--va )'>
            Primary Button
          </Button>
          <Button>Primary Button</Button>
          <p className='py-12'> Default Click</p>
        </Col>
        <Col>
          <ButtonRipple variant='outline' bg='var(--text-danger)'>
            Danger
          </ButtonRipple>
          <ButtonRipple variant='text' bg='var(--text-success)'>
            Success
          </ButtonRipple>
          <ButtonRipple>Primary </ButtonRipple>
          <Button onClick={hanldeClick}>
            Primary
            <Ripple color={'rgba(255, 255, 255,0.5)'} duration={1500} />
          </Button> 
          <p className='py-12'> Animate Click</p>
        </Col>
        <Col>
          <ButtonSank bg='var(--text-success)'>Success Button</ButtonSank>
          <p className='py-12'>Animate Click</p>
        </Col>
        <Col>
          <Button>
            Ripple Effect
            <Ripple color={'rgba(255, 255, 255,0.7)'} duration={1500} />
          </Button>
        </Col>
        <Col>
          <ButtonRipple variant='text' bg='var(--text-success)'>
            Success
          </ButtonRipple>
        </Col>
      </Container>
    </div>
  );
}

export const ButtonStyled = styled.button`
  overflow: hidden;
  outline: none;
  position: relative;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
  padding: 10px 30px;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #fff;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  width: 50%;
  height: 5rem;
`;
export default ButtonPage;
