import React, { useEffect, useState, useContext } from 'react';
import firebase from '../../config/firebase';
import HomeComponent from '../../components/Home/index';
import LoadingSpinner from '../../components/LoadingSpinner/index';
import Titulo from '../../components/Title';
import { AuthContext } from '../../contexts/Auth';

const HomeCamisetas = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const styles = {
    layout: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '5px',
    },
  };
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    const showProducts = async () => {
      try {
        const documents = await firebase.db.collection('camisetas').get();
        setProductos(documents.docs);
        setLoading(false);
        console.log(productos);
      } catch (e) {
        console.log('Error', e.message);
      }
    };
    showProducts();
  }, []);

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
            <div style={styles.layout}>
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
