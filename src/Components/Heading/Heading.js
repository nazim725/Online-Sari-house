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
import logo from '../../images/logo.png'
import './Heading.css'

const Heading = memo(() => {
  return (
    <div>
      <Container>
        <Row className="mt-2">
          <Col sm={12} md={2} className="">
            <img src={logo} alt="" className="logo" />
          </Col>
          <Col sm={12} md={5} className="mt-4 ms-4">
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Text input with dropdown button"
                placeholder="Search For Products"
                className="w-25"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Search For Products"
              />

              <DropdownButton
                variant="outline-secondary"
                title="SELECT CATEGORY"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <Button variant="outline-secondary" id="button-addon2">
                <i class="fas fa-search"></i>
              </Button>
            </InputGroup>
          </Col>
          <Col sm={12} md={4} className="d-flex  mt-4 ms-5">
            <button type="button" class="btn btn-light icon-button bg-light">
              LOGIN/REGISTER
            </button>
            <button
              type="button"
              class="btn btn-light position-relative icon-button ms-3"
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
              class="btn btn-light position-relative icon-button ms-3"
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
              class="btn btn-light position-relative icon-button ms-3"
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
              class="btn btn-light position-relative icon-button ms-3 d-flex"
            >
              <p>&#2547;</p> <span className="ms-2">0.00</span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  )
})

export default Heading
