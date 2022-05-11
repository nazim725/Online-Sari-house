import { Button } from 'bootstrap'
import React, { memo } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import './ShowProduct.css'

const ShowProduct = memo(() => {
  return (
    <div style={{ background: '#a0b1ab' }}>
      <Carousel variant="dark">
        <Carousel.Item>
          <Row>
            <Col md={6} sm={12}>
              <img
                src="https://www.oshary.com/wp-content/uploads/2021/08/saree1.png"
                alt=""
                className='ms-5 mt-2'
              />
            </Col>
            <Col md={6} sm={12}>
              <div className="products-details">
                <h5 className="">PRODUCT LANDING PAGE</h5>
                <h1 className="fw-bold lh-base">
                  Pink & Blue Woven <br /> Design Zari Sari
                </h1>
                <span className="fs-3">৳ 18000</span>
                <button className="btn btn-secondary ms-4">ADD TO CART</button>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  )
})

export default ShowProduct
