import React, { useContext } from 'react';
import HomeComponent from '../Common/index';
import LoadingSpinner from '../../../Common/Spinner/index';
import Titulo from '../../../Common/Title/index';
import { AuthContext } from '../../../../Contexts/Auth';
import useShowProducts from '../../../../hooks/useShowProducts';
import '../catalogue.css'

const Home = () => {
  const [productos, loading] = useShowProducts('productos');
  const { usuario } = useContext(AuthContext); 

  if (loading) {
    return <LoadingSpinner variant='danger' />;
  } else {
    return (
      <div>
        <Titulo message='Productos destacados' />
        {usuario !== null && (
          <>
            <div className="layout">
              {productos.map((producto) => (
                <HomeComponent
                  key={producto.id}
                  datos={{ ...producto.data(), id: producto.id }}
                  category='Destacados'
                  bg='dark'
                  text='light'
                  border='light'
                />
              ))}
            </div>
          </>
        )}
        {usuario === null && (
          <>Inicie sesion para consultar nuestros productos</>
        )}
      </div>
    );
  }
};

export default Home;
