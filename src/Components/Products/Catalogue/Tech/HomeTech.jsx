import React, { useContext } from 'react';
import HomeComponent from '../Common/index';
import LoadingSpinner from '../../../Common/Spinner/index';
import Titulo from '../../../Common/Title/index';
import { AuthContext } from '../../../../Contexts/Auth';
import useShowProducts from '../../../../hooks/useShowProducts';
import '../catalogue.css'

const HomeTech = () => {
  const [productos, loading] = useShowProducts('tecnologia');
  const { usuario } = useContext(AuthContext);

  
  if (loading) {
    return <LoadingSpinner variant='danger' />;
  } else {
    return (
      <div>
        <div>
          <Titulo message='Productos de tecnologia' bg='#d9d9d9'/>
        </div>
        {usuario !== null && (
          <>
            <div className="layout">
              {productos.map((producto, i) => (
                <HomeComponent
                  key={producto.id}
                  datos={{ ...producto.data(), id: producto.id }}
                  category='Tech'
                  bg='light'
                  text='dark'
                  border='dark'
                />
              ))}
              {usuario === null && (
                <>Inicie sesion para consultar nuestros productos</>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
};

export default HomeTech;
