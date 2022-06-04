import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Kryptonite.css'

const Kryptonite = () => {
  return (
    <div className="obsidian pb-5">
      <Container>
        <Row>
          <Col className="col-6 boron-info">
            <h2>Royal exclusive</h2>
            <h2>Kryptonite For Women</h2>
            <h2>Call+8801768736855</h2>
            <p>Estimated Time of Arrival 15 Days</p>
            <button>PRE ORDER NOW</button>
          </Col>
          <Col className="col-6 boron-pic mt-3">
            <img
              src="https://www.oshary.com/wp-content/uploads/2022/05/royal-403.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Kryptonite
