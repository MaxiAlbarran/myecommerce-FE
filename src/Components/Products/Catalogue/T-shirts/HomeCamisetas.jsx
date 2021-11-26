import React, { useContext } from 'react';
import HomeComponent from '../Common/index';
import LoadingSpinner from '../../../Common/Spinner/index';
import Titulo from '../../../Common/Title/index';
import { AuthContext } from '../../../../Contexts/Auth';
import useShowProducts from '../../../../hooks/useShowProducts';
import '../catalogue.css'

const HomeCamisetas = () => {
  const [productos, loading] = useShowProducts('camisetas')
  const { usuario } = useContext(AuthContext);

  
  if (loading) {
    return <LoadingSpinner variant='danger' />;
  } else {
    return (
      <div>
        <div>
          <Titulo message='Nuevo ingreso de Camisetas' />
        </div>
        {usuario !== null && (
          <>
            <div className="layout">
              {productos.map((producto, i) => (
                <HomeComponent
                  key={producto.id}
                  datos={{ ...producto.data(), id: producto.id }}
                  category='Camisetas'
                  bg='secondary'
                  text='light'
                  border='dark'
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

export default HomeCamisetas;
