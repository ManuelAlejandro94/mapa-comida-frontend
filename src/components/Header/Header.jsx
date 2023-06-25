import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/App.css';
import './header.css';

function HeaderNav() {
  return (
    <Navbar id='navBar' collapseOnSelect expand="md" bg="purple-nu" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mapa Comida</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='to-right'>
            <Nav.Link href="#deets">Registrarse</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Iniciar sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;