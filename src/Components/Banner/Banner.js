import React, { memo } from 'react'
import './Banner.css'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import moon from '../../images/moon.png'
import dress from '../../images/dress.png'
import sari from '../../images/sari.png'
import hoodie from '../../images/hoodie.png'
import sport from '../../images/sport.png'
import decor from '../../images/lamp-decor.png'
import acs from '../../images/bags.png'
import Menu from './Menu/Menu'

const Banner = memo(() => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={3}>
          <div class="list-group">
            <p class="list-group-item list-group-item-action bg-secondary text-white">
              {' '}
              <i class="fas fa-sliders-h me-3"></i> BROWSE CATEGORIES
            </p>
            <a href="#" class="list-group-item list-group-item-action">
              <img src={moon} alt="" className="icon-img" /> Eid Collection
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img src={dress} alt="" className="icon-img" /> Women Clothing
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <img src={sari} alt="" className="icon-img" /> Women Sharee
            </a>
            <a class="list-group-item list-group-item-action ">
              <img src={hoodie} alt="" className="icon-img" /> Man Fashion
            </a>
            <a class="list-group-item list-group-item-action ">
              <img src={acs} alt="" className="icon-img" /> Accessories
            </a>
            <a class="list-group-item list-group-item-action">
              <img src={sport} alt="" className="icon-img" /> Sports
            </a>
            <a class="list-group-item list-group-item-action">
              <img src={decor} alt="" className="icon-img" /> Home Decore
            </a>
          </div>
        </Col>
        <Col sm={12} md={9}>
          <Menu></Menu>
          <Container>
            <Carousel fade>
              <Carousel.Item className=''>
                <Row>
                  <Col className="col-6">
                    <h2 className="my-4 fw-bold text-secondary fs-1">
                      Trendy Collection
                    </h2>
                    <p className="my-4 fs-5">Browser for latest collection</p>
                    <div className="d-flex my-3">
                      Colors:
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          background: '#2ECC71',
                        }}
                        className="rounded-circle ms-3"
                      ></div>
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          background: '#DC7633',
                        }}
                        className="rounded-circle ms-3"
                      ></div>
                    </div>
                    <h4 className="d-flex fw-bold fs-2 my-4">
                      &#2547; <span className="ms-2">80000</span>
                    </h4>
                    <button className="btn btn-primary rounded-pill my-3">
                      Click Here
                    </button>
                  </Col>
                  <Col className="col-6">
                    <img
                      src="https://oshary.com/wp-content/uploads/2022/04/Screenshot_19-removebg-preview.png"
                      alt=""
                      height={350}
                      width={330}
                      className="ms-5"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col className="col-6">
                    <h2 className="my-4 fw-bold text-secondary fs-1">
                      Natural Trendy Collection
                    </h2>
                    <p className="my-4 fs-5">Visit Shop for more Quality</p>
                    <div className="d-flex my-3">
                      Colors:
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          background: '#117A65',
                        }}
                        className="rounded-circle ms-3"
                      ></div>
                      <div
                        style={{
                          width: '30px',
                          height: '30px',
                          background: '#6C3483',
                        }}
                        className="rounded-circle ms-3"
                      ></div>
                    </div>
                    <h4 className="d-flex fw-bold fs-2 my-4">
                      &#2547; <span className="ms-2">80000</span>
                    </h4>
                    <button className="btn btn-primary rounded-pill my-3">
                      Click Here
                    </button>
                  </Col>
                  <Col className="col-6">
                    <img
                      src="https://oshary.com/wp-content/uploads/2022/04/023.png"
                      alt=""
                      height={350}
                      width={330}
                      className="ms-5"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Container>
        </Col>
      </Row>
    </Container>
  )
})

export default Banner
