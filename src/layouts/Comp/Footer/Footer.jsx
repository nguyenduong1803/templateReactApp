import React from 'react'
import { Col } from '~/layouts/GridSystem'

const footerItems = [
  {
    title: "For designers",
    items: [
      "Go Pro!",
      "Explore design work",
      "Design blog",
      "Overtime podcast",
      "Playoffs",
      "Weekly Warm-Up",
    ]
  },
  {
    title: "For designers",
    items: [
      "Go Pro!",
      "Explore design work",
      "Design blog",
      "Overtime podcast",
      "Playoffs",
      "Weekly Warm-Up",
    ]
  }, {
    title: "For designers",
    items: [
      "Go Pro!",
      "Explore design work",
      "Design blog",
      "Overtime podcast",
      "Playoffs",
      "Weekly Warm-Up",
    ]
  }, {
    title: "For designers",
    items: [
      "Go Pro!",
      "Explore design work",
      "Design blog",
      "Overtime podcast",
      "Playoffs",
      "Weekly Warm-Up",
    ]
  }
]
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {footerItems.map(item => {
            return (<Col >
              <h2>{item.title}</h2>
              <ul> {item.items.map((element) => <li>{element}</li>)}</ul>
            </Col>)
          }
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer