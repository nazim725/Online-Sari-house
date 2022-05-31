import React, { memo } from 'react'
import './HomeDecoreBanner.css'
import { Carousel, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import moon from '../../images/moon.png'
import dress from '../../images/dress.png'
import sari from '../../images/sari.png'
import hoodie from '../../images/hoodie.png'
import sport from '../../images/sport.png'
import decor from '../../images/lamp-decor.png'
import acs from '../../images/bags.png'

import bannerPic from '../../images/home-decore-pic.jpeg'
import Menu from '../Banner/Menu/Menu'
import { Link } from 'react-router-dom'
const Banner = memo(() => {
  return (
    <div
      style={{
        background: 'url("https://i.ibb.co/fp0RDWk/home-decore-pic.jpg")',
        paddingBottom: '40px',
        height: '400px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Row>
        <Col sm={12} md={3}>
          <div class="list-group ms-5">
            <p class="list-group-item list-group-item-action bg-secondary text-white list-heading">
              {' '}
              <i class="fas fa-sliders-h me-3"></i> BROWSE CATEGORIES
            </p>
            <div className="list-items">
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
          </div>
        </Col>
        <Col sm={12} md={9}>
          <Menu></Menu>
          <Container>
            <h1 className="homeDecore-heading">
              <Link to="/home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="26"
                  fontSize={20}
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </Link>
              Home Decore
            </h1>
            <div className='homeDecore-nav'>
                <Link to="" className='link'>JUTE</Link>
                <Link to="" className='link'>SHOTORONJI</Link>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  )
})

export default Banner
