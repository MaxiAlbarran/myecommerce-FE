import React, { useEffect, useState, useContext } from 'react';
import firebase from '../../../../Firebase/firebase';
import HomeComponent from '../Common/index';
import LoadingSpinner from '../../../Common/Spinner/index';
import Titulo from '../../../Common/Title/index';
import { AuthContext } from '../../../../Contexts/Auth';

const HomeTech = () => {
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
        const documents = await firebase.db.collection('tecnologia').get();
        setProductos(documents.docs);
        setLoading(false);
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
          <Titulo message='Productos de tecnologia' />
        </div>
        {usuario !== null && (
          <>
            <div style={styles.layout}>
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