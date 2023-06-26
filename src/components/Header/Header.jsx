import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/App.css';
import './header.css';
import { Outlet } from 'react-router-dom';

function HeaderNav() {
  return (
    <Navbar id='navBar' collapseOnSelect expand="md" bg="purple-nu" variant="dark">
      <Container>
        <Navbar.Brand href="/">Mapa Comida</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='to-right'>
            <Nav.Link href="/register">Registrarse</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Iniciar sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;