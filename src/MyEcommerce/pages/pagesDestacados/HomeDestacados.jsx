import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase';
import HomeComponent from '../../components/Home/index';
import Menu from '../../components/Menu/index';
import LoadingSpinner from '../../components/LoadingSpinner/index';
import Titulo from '../../components/Title';

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
  }, []);

  if (loading) {
    return <LoadingSpinner variant='danger' />;
  } else {
    return (
      <div>
        <Menu category='Destacados' />
        <div>
          <Titulo message='Productos destacados' />
        </div>
        <div style={styles.layout}>
          {productos.map((producto) => (
            <HomeComponent
              datos={{ ...producto.data(), id: producto.id }}
              category='Destacados'
              bg='dark'
              text='light'
              border='light'
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
