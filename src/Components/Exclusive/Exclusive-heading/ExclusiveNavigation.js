import React, { memo } from 'react'
import {
  Col,
  Container,
  DropdownButton,
  InputGroup,
  Row,
  Dropdown,
  FormControl,
  Button,
} from 'react-bootstrap'
import logo from '../../../images/logo.png'
import './ExclusiveNavigation.css'

const ExclusiveNavigation = memo(() => {
  return (
    <div className="fixed-top">
      <Container>
        <Row className="mt-2">
          <Col sm={12} md={2} className="">
            <img src={logo} alt="" className="logo"  />
          </Col>
          <Col sm={12} md={5} className="mt-4 ms-4">
            <nav className="exclusive-nav mt-2">
              <a href="">ROYAL EXCLUSIVE COLLECTION</a>
              <a href="">FLASH SALE</a>
              <a href="">BUY2GET1</a>
            </nav>
          </Col>
          <Col sm={12} md={4} className="d-flex  mt-4 ms-5">
            <button type="button" class="btn icon-button ">
              LOGIN/REGISTER
            </button>
            <button
              type="button"
              class="btn  position-relative icon-button ms-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="My Wishlist"
            >
              <i class="far fa-heart icon"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                0<span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <button
              type="button"
              class="btn  position-relative icon-button ms-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Compare Products"
            >
              <i class="fas fa-times icon"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                0<span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <button
              type="button"
              class="btn  position-relative icon-button ms-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Shopping Cart"
            >
              <i class="fas fa-shopping-bag icon"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                0<span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <button
              type="button"
              class="btn  position-relative icon-button ms-3 d-flex"
            >
              <p>&#2547;</p> <span className="ms-2">0.00</span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
})

export default ExclusiveNavigation
