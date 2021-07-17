import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Menu = ({ category }) => {
  return (
    <Navbar bg='light' variant='light' expand='lg'>
      <Navbar.Brand>Maxi Albarran Ecommerce</Navbar.Brand>
      <Nav.Link as={Link} to={'/Home/' + category}>
          Inicio
        </Nav.Link>
      <Nav className='mr-auto'>
        <NavDropdown title='Categorias' id='basic-nav-dropdown'>
          <NavDropdown.Item as={Link} to='/Home/Destacados'>
            Destacados
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to='/Home/Camisetas'>
            Camisetas
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to='/Home/Tech'>
            Tecnologia
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to={'/ABM/' + category}>
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

export default Menu;
