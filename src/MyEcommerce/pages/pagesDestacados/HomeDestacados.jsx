import React, { useEffect, useState, useContext } from 'react';
import firebase from '../../config/firebase';
import HomeComponent from '../../components/Home/index';
import LoadingSpinner from '../../components/LoadingSpinner/index';
import Titulo from '../../components/Title';
import { AuthContext } from '../../contexts/Auth';

const Home = () => {
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
        const documents = await firebase.db.collection('productos').get();
        setProductos(documents.docs);
        setLoading(false);
        console.log(productos);
      } catch (e) {
        console.log('Error', e.message);
      }
    };
    showProducts();
  }, [productos]);

  if (loading) {
    return <LoadingSpinner variant='danger' />;
  } else {
    return (
      <div>
        <Titulo message='Productos destacados' />
        {usuario !== null && (
          <>
            <div style={styles.layout}>
              {productos.map((producto, i) => (
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
