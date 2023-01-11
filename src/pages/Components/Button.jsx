import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '~/components/Atom/Button/Button';
import ButtonSank from '~/components/Atom/Button/ButtonSank';
import LazyLoadingScreen from '~/components/Atom/LazyLoadingScreen';
import { Col, Container, Box } from '~/layouts/Grid';

function ButtonPage() {
  const [active, setActive] = useState(false);

  const hanldeClick = () => {
    console.log('click');
    setActive(true);
  };
  return (
    <div>
      <Container size='fluid'>
        <h1>Button</h1>
        <p>Buttons allow users to take actions, and make choices, with a single tap.</p>
        <div className='row'>
          <Col sm={2} md={3} lg={4}>
            <Button loading={active} variant='outline' bg='success' ripple onClick={hanldeClick}>
              Primary
            </Button>
            <Button variant='text' bg='danger' ripple onClick={() => setActive(false)}>
              Danger
            </Button>
          </Col>
          <Col>
            <Button loading={active} onClick={hanldeClick} ripple>
              Ripple Effect
            </Button>
          </Col>
          <Col>
            <Box>ádfadf</Box>
            <ButtonSank>Ripple Effect</ButtonSank>
          </Col>
        </div>
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
  color: var(--white);
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid var(--white);
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  width: 50%;
  height: 5rem;
`;
export default ButtonPage;
