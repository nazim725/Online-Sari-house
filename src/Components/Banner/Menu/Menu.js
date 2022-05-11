import React, { memo } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Menu = memo(() => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="fw-bold">
                HOME
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                SHOP
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                BLOG
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                ABOUT US
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                CONTACT US
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" className="fw-bold">
                EID OFFER
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
})

export default Menu
