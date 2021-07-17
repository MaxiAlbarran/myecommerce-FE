import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeComponent from './index';

const Home = () => {
  const [productos, setProductos] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      const datos = await fetch('https://jsonfy.com/items').then((res) =>
        res.json()
      ); 
      setProductos(datos);
      setCargando(false);
    };

    fetching();
  }, []);

  if (cargando) {
    return 'Loading...';
  } else {
    return (
      <div>
        <div>
          <h2>Ofertas del dia del padre!</h2>
        </div>
        <div>
          {productos &&
            productos.map((producto) => <HomeComponent datos={producto} />)}
        </div>
      </div>
    );
  }
};

export default Home;

// asi tiene que quedar en app.js

/* import { BrowserRouter, Route } from 'react-router-dom';
import Login from './MyEcommerce/Pages/Login';
import Registration from './MyEcommerce/Pages/Registration';
import Home from './MyEcommerce/Pages/Home';
import Detalle from './MyEcommerce/Pages/Detalle';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Login} />
      <Route path='/Registro' exact component={Registration} />
      <Route path='/Home' exact component={Home} />
      <Route path='/Detalle/:id' exact component={Detalle} />
    </BrowserRouter>
  );
}

export default App;*/
