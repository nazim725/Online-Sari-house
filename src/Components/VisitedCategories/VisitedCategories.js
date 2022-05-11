import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './VisitedCategories.css'

const VisitedCategories = memo(() => {
  return (
    <div>
      <h4 className="text-center text-secondary">SEE OUR COLLECTION</h4>
      <h1 className="text-center fs-1">TOP VISITED CATEGORIES</h1>
      <p className="text-center text-secondary">
        Street art salvia irony wolf waistcoat actually lomo meh fap jean
        shorts.
      </p>
      <div className="ms-2">
        <Row>
          <Col sm={12} md={3} className="categories">
          <img
                src="https://www.oshary.com/wp-content/uploads/2022/05/p-4.jpg"
                alt=""
              />
              <div>WOMEN SARI</div>
          </Col>
          <Col sm={12} md={3} className="categories">
            <img
              src="https://www.oshary.com/wp-content/uploads/2022/04/BOR-100-4.jpg"
              alt=""
            />
            <div>WOMEN SARI</div>
          </Col>
          <Col sm={12} md={3} className="categories">
            <img
              src="https://www.oshary.com/wp-content/uploads/2022/04/Shotoronji.png"
              alt=""
            />
            <div>WOMEN SARI</div>
          </Col>
          <Col sm={12} md={3} className="categories">
            <img
              src="https://www.oshary.com/wp-content/uploads/2022/05/JE-100-07.png"
              alt=""
            />
            <div>WOMEN SARI</div>
          </Col>
        </Row>

        <div></div>
      </div>
    </div>
  )
})

export default VisitedCategories
