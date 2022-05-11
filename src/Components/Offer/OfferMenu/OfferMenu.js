import React, { memo } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const OfferMenu = memo(() => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand href="#home" className="text-dark fw-bold">
            SPECIAL OFFER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="text-dark fw-bold">
                NEW
              </Nav.Link>
              <Nav.Link href="#" className="text-dark fw-bold">
                FEATURED
              </Nav.Link>
              <Nav.Link href="#" className="text-dark fw-bold">
                TOP SELLER
              </Nav.Link>
            </Nav>
            <Nav>
              <button className="fw-bold fs-4 border-0 bg-transparent">
                {' '}
                &lt;
              </button>
              <button className="fw-bold fs-4 border-0 bg-transparent">
                {' '}
                &gt;
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
})

export default OfferMenu
