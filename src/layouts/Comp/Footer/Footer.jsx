import React from 'react'
import { Col } from '~/layouts/Comp/GridSystem'

function Footer({ footer }) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {footer.map((item, index) => {
            return (
              <Col key={index}>
                <h2>{item.title}</h2>
                <ul> {item.items.map((element, i) => <li key={i}><a href="/">{element}</a></li>)}</ul>
              </Col>)
          })
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer