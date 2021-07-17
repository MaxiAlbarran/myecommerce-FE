import React, { useEffect, useState } from 'react';
import firebase from '../../config/firebase';
import HomeComponent from '../../components/Home/index';
import Menu from '../../components/Menu/index';
import LoadingSpinner from '../../components/LoadingSpinner/index';
import Titulo from '../../components/Title';

const HomeTech = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const styles = {
    layout: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginLeft: 'auto',
      marginTop: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
    },
  };

  useEffect(() => {
    const showProducts = async () => {
      try {
        const documents = await firebase.db.collection('tecnologia').get();
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
        <Menu category='Tech' />
        <div>
          <Titulo message='Productos de tecnologia' />
        </div>
        <div style={styles.layout}>
          {productos.map((producto) => (
            <HomeComponent
              datos={{ ...producto.data(), id: producto.id }}
              category='Tech'
              bg='light'
              text='dark'
              border='dark'
            />
          ))}
        </div>
      </div>
    );
  }
};

export default HomeTech;
