import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Obsidian.css'

const Obsidian = () => {
  return (
    <div className="obsidian pb-5">
      <Container>
        <Row>
          <Col className="col-6 boron-pic mt-3">
            <img
              src="https://www.oshary.com/wp-content/uploads/2022/05/royal302.png"
              alt=""
            />
          </Col>
          <Col className="col-6 boron-info">
            <h2>Royal exclusive</h2>
            <h2>Obsidian For Women</h2>
            <h2>Call+8801768736855</h2>
            <p>Estimated Time of Arrival 15 Days</p>
            <button>PRE ORDER NOW</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Obsidian
