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
                TODAY'S DEALS
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                FLASH SALE
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                EID SALE
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" className="fw-bold">
                TRACK YOUR ORDER
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
})

export default Menu
