import React from 'react';
import styled from 'styled-components';
import { Col, Grid } from '../GridSystem';
function Footer({ footer }) {
  return (
    <footer className='border-top mt-24 pt-24'>
      <Grid container='container-fluid '>
        {footer.map((item, index) => {
          return (
            <Col sm={3} key={index}>
              <h3>{item.title}</h3>
              <ul>
                {' '}
                {item.items.map((element, i) => (
                  <li key={i}>
                    <FooterLink href='/'>{element}</FooterLink>
                  </li>
                ))}
              </ul>
            </Col>
          );
        })}
      </Grid>
    </footer>
  );
}

const FooterLink = styled.a`
  color: var(--text-color);
  font-size: 1.4rem;
  line-height: 3.4rem;
`;
export default Footer;
