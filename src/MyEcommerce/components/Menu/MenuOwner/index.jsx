import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';

const MenuOwner = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand>Bienvenido Maxi</Navbar.Brand>
      <Nav>
      <Nav.Link as={Link} to={'/Home/Destacados'}>
          Inicio destacados
        </Nav.Link>
        <Nav.Link as={Link} to={'/Home/Camisetas'}>
          Inicio camisetas
        </Nav.Link>
        <Nav.Link as={Link} to={'/Home/Tech'}>
          Inicio Tecnologia
        </Nav.Link>
        <Nav.Link as={Link} to={'/Registro/Usuarios'}>
          Usuarios
        </Nav.Link>
        <Nav.Link as={Link} to={'/ABM'}>
          Alta de productos
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to='/'>
          Login
        </Nav.Link>
        <Nav.Link as={Link} to='/Registro'>
          Registrarse
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MenuOwner;
