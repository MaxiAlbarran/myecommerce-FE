import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase';
import HomeComponent from '../../components/Home/index';
import Menu from '../../components/Menu/index';
import LoadingSpinner from '../../components/LoadingSpinner/index';

const HomeCamisetas = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const styles = {
    layout: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  };

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
        <Menu category='Camisetas' />
        <div>
          <h2>Nuevo ingreso de Camisetas</h2>
        </div>
        <div style={styles.layout}>
          {productos.map((producto) => (
            <HomeComponent
              datos={{ ...producto.data(), id: producto.id }}
              category='Camisetas'
              bg='secondary'
              text='light'
              border="dark"
            />
          ))}
        </div>
      </div>
    );
  }
};

export default HomeCamisetas;
