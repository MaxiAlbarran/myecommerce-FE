import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/Auth';

const Menu = () => {
  const location = useLocation();
  console.log('Location', location);
  const { usuario, isOwner, handleClickLogOut } = useContext(AuthContext);

  if (!usuario) {
    return (
      <Navbar bg='light' variant='light' expand='lg'>
        <Navbar.Brand>MyEcommerce</Navbar.Brand>
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
  } else {
    return (
      <Navbar bg='light' variant='light' expand='lg'>
        <Navbar.Brand>MyEcommerce</Navbar.Brand>
        <Nav.Link as={Link} to={'/Home/Destacados'}>
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
          {isOwner && (
            <>
              <Nav.Link as={Link} to={'/Registro/Usuarios'}>
                Usuarios
              </Nav.Link>
              <Nav.Link as={Link} to={'/ABM'}>
                Alta de productos
              </Nav.Link>
            </>
          )}
        </Nav>
        <Nav>
          <Nav.Link onClick={handleClickLogOut}>
            Cerrar sesion
          </Nav.Link>
          <Nav.Link as={Link} to='/Registro'>
            Registrarse
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
};

export default Menu;
