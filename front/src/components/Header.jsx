
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

import "E:/project/Project/front/src/App.css"

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="body">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="navbar" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/">Header</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact" >Contact</Nav.Link>
            <Nav.Link href="/collection" >Collection</Nav.Link>
            <Nav.Link href="/abc" >Abc</Nav.Link>
            <Nav.Link href="/cart" >Cart</Nav.Link>
           
            <NavDropdown title="Login" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/rf">Registration</NavDropdown.Item>
            </NavDropdown>
            
        </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;