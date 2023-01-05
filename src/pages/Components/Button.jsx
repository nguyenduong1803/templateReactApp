import React from 'react';
import styled from 'styled-components';
import Button from '~/components/Atom/Button/Button';
import ButtonSank from '~/components/Atom/Button/ButtonSank';
import { Col, Container,Box } from '~/layouts/Grid';

function ButtonPage() {
  const hanldeClick = () => {
    console.log('click');
  };
  return (
    <div>
      <h2 className='main-title pl-24'>Button</h2>
      <Container>
        <Col>
          <Button variant='outline' bg='success' ripple onClick={hanldeClick}>
            Primary
          </Button>
          <Button variant='text' bg='danger' ripple onClick={hanldeClick}>
            Danger
          </Button>
        </Col>
        <Col>
          <Button ripple>Ripple Effect</Button>
        </Col>
        <Col>
        <Box >
          ádfadf
        </Box>
          <ButtonSank>Ripple Effect</ButtonSank>
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
