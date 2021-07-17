import { BrowserRouter, Route } from 'react-router-dom';
import Login from './MyEcommerce/pages/pagesUsers/Login';
import Registration from './MyEcommerce/pages/pagesUsers/Registration';
import Home from './MyEcommerce/pages/pagesDestacados/HomeDestacados';
import Detalle from './MyEcommerce/pages/pagesDestacados/DetalleDestacados';
import Products from './MyEcommerce/pages/pagesDestacados/ABMDestacados';
import HomeCamisetas from './MyEcommerce/pages/pagesCamisetas/HomeCamisetas';
import DetalleCamisetas from './MyEcommerce/pages/pagesCamisetas/DetalleCamisetas';
import ProductsCamisetas from './MyEcommerce/pages/pagesCamisetas/ABMCamisetas';
import HomeTech from './MyEcommerce/pages/pagesTech/HomeTech';
import DetalleTech from './MyEcommerce/pages/pagesTech/DetalleTech';
import ProductsTech from './MyEcommerce/pages/pagesTech/ABMTech';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Route path='/' exact component={Login} />
        <Route path='/Registro' exact component={Registration} />
        <Route path='/Home/Destacados' exact component={Home} />
        <Route path='/Detalle/Destacados/:id' exact component={Detalle} />
        <Route path='/ABM/Destacados' exact component={Products} />
        <Route path='/Home/Camisetas' exact component={HomeCamisetas} />
        <Route
          path='/Detalle/Camisetas/:id'
          exact
          component={DetalleCamisetas}
        />
        <Route path='/ABM/Camisetas' exact component={ProductsCamisetas} />
        <Route path='/Home/Tech' exact component={HomeTech} />
        <Route path='/Detalle/Tech/:id' exact component={DetalleTech} />
        <Route path='/ABM/Tech' exact component={ProductsTech} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
