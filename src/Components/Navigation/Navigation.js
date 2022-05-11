import React, { memo } from 'react'
import './Navigation.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Navigation = memo(() => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg=""
        variant=""
        className="navigation"
      >
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              <NavDropdown
               
                id="nav-dropdown"
                title='ENGLISH'
              >
                <NavDropdown.Item href="#action/3.1">Deutsch</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">French</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Requires WPML Plugins
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown
                title="COUNTRY"
                id="nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  United States (USD)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Deutschland (EUR)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Japan (JPY)
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link className="text-white nav-item">
                Welcome to oshary Online Store.
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="" className="social-icon text-white">
                {' '}
                <i class="fab fa-facebook"></i> <i class="fab fa-instagram"></i>{' '}
                <i class="fab fa-youtube"></i> <i class="fab fa-pinterest"></i>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#" className="nav-item text-white">
                NEWSLETTER
              </Nav.Link>
              <Nav.Link eventKey={2} href="#" className="nav-item text-white">
                CONTACT US
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href=""
                className="nav-item last-item  text-white"
              >
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
})

export default Navigation
