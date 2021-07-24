import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './MyEcommerce/pages/pagesUsers/Login';
import Registration from './MyEcommerce/pages/pagesUsers/Registration';
import Home from './MyEcommerce/pages/pagesDestacados/HomeDestacados';
import Detalle from './MyEcommerce/pages/pagesDestacados/DetalleDestacados';
import HomeCamisetas from './MyEcommerce/pages/pagesCamisetas/HomeCamisetas';
import DetalleCamisetas from './MyEcommerce/pages/pagesCamisetas/DetalleCamisetas';
import HomeTech from './MyEcommerce/pages/pagesTech/HomeTech';
import DetalleTech from './MyEcommerce/pages/pagesTech/DetalleTech';
import GetUsers from './MyEcommerce/pages/OwnerPages/UsuariosPage/GetUsers';
import ABMPage from './MyEcommerce/pages/OwnerPages/ABMPage/index'
import { Container } from 'react-bootstrap';
import Menu from './MyEcommerce/components/Menu';


function App() {
  return (
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
}

export default App;
