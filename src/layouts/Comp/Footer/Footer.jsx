import React from 'react'
import { Col } from '~/layouts/Comp/GridSystem'
import styled from "styled-components"
function Footer({ footer }) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {footer.map((item, index) => {
            return (
              <Col key={index}>
                <h2>{item.title}</h2>
                <ul> {item.items.map((element, i) => <li key={i}><FooterLink href="/">{element}</FooterLink></li>)}</ul>
              </Col>)
          })
          }
        </div>
      </div>
    </footer>
  )
}

const FooterLink = styled.a`
color:var(--text-color);
font-size: 1.4rem;
line-height:3.4rem;
`
export default Footer