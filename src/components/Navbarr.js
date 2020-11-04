import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Navbarr() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ backgroundColor: 'red' }}>
      <Navbar.Brand>Angelojulianosalon</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/about" >About</Link>
          <Link className="nav-link" to="/contact" >ContactUs</Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>

  )

}
