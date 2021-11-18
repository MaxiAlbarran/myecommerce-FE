import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Menu from './Components/Common/Menu/index';
import Login from './Components/Authentication/Login/Login';
import Registration from './Components/Authentication/Registration/Registration';
import GetUsers from './Components/Authentication/UserControl/GetUsers';
import Home from './Components/Products/Catalogue/Featured/HomeDestacados';
import Detalle from './Components/Products/Details/Featured/DetalleDestacados';
import HomeCamisetas from './Components/Products/Catalogue/T-shirts/HomeCamisetas';
import DetalleCamisetas from './Components/Products/Details/T-shirts/DetalleCamisetas';
import HomeTech from './Components/Products/Catalogue/Tech/HomeTech';
import DetalleTech from './Components/Products/Details/Tech/DetalleTech';
import ABMPage from './Components/Products/Registration/index';

const Routes = () => {
  return(
    <BrowserRouter>
    <Menu />
    <Switch>
      <Container>
        <Route path='/' exact component={Login} />
        <Route path='/Registro' exact component={Registration} />
        <Route path='/Home/Destacados' exact component={Home} />
        <Route path='/Detalle/Destacados/:id' exact component={Detalle} />
        <Route path='/Home/Camisetas' exact component={HomeCamisetas} />
        <Route
          path='/Detalle/Camisetas/:id'
          exact
          component={DetalleCamisetas}
        />
        <Route path='/Home/Tech' exact component={HomeTech} />
        <Route path='/Detalle/Tech/:id' exact component={DetalleTech} />
        <Route path='/Registro/Usuarios' exact component={GetUsers} />
        <Route path='/ABM' exact component={ABMPage} />
      </Container>
    </Switch>
  </BrowserRouter>
  );
};

export default Routes;
