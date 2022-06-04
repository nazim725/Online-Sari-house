import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Aragon.css'

const Aragon = () => {
  return (
    <div className="aragon pb-5">
      <Container>
      <Row>
        <Col className="col-6 boron-info">
          <h2>Royal exclusive</h2>
          <h2>Aragon For Women</h2>
          <h2>Call+8801768736855</h2>
          <p>Estimated Time of Arrival 15 Days</p>
          <button>PRE ORDER NOW</button>
        </Col>
        <Col className="col-6 boron-pic mt-3">
          <img
            src="https://www.oshary.com/wp-content/uploads/2022/05/royal-2003.png"
            alt=""
          />
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Aragon
