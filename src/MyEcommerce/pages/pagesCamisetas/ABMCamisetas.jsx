import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase';
import ABMComponent from '../../components/ABM/index';
import Menu from '../../components/Menu/index';
import LoadingSpinner from '../../components/LoadingSpinner/index';
import BootstrapForm from '../../components/Formularios/BootstrapForm/index';
import { Button } from 'react-bootstrap';

const ProductsCamisetas = () => {
  const [productoForm, setProductoForm] = useState({
    name: '',
    description: '',
    price: '',
    id: null,
    SKU: '',
    category: '',
    img: null,
  });
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const styles = {
    cards: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  };

  const showProducts = async () => {
    try {
      setLoading(true);
      const querySnapshot = await firebase.db.collection('camisetas').get();
      setProductos(querySnapshot.docs);
      setLoading(false);
      setReload(false);
    } catch (e) {
      console.log('Error', e.message);
    }
  };

  useEffect(() => {
    showProducts();
  }, []);

  useEffect(() => {
    if (reload) {
      showProducts();
    }
  }, [reload]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Completado', productoForm);
    try {
      let newProducts;
      if (productoForm.id === null) {
        newProducts = await firebase.db
          .collection('camisetas')
          .add(productoForm);
      } else {
        newProducts = await firebase.db
          .doc('camisetas/' + productoForm.id)
          .set(productoForm);
      }

      console.log('Producto agregado', newProducts);
      setReload(true);
    } catch (e) {
      alert(e.message);
      console.log(e);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProductoForm({ ...productoForm, [name]: value });
  };

  const handleClickCambiar = (producto) => {
    setProductoForm(producto);
    console.log(producto);
  };

  const handleCLickDelete = async (producto) => {
    try {
      const documentDelete = await firebase.db
        .doc('camisetas/' + producto.id)
        .delete();
      setReload(true);
      console.log(documentDelete);
    } catch (e) {
      console.log('error', e.message);
    }
  };

  if (loading) {
    return <LoadingSpinner variant='danger' />;
  } else {
    return (
      <div>
        <Menu category='Camisetas' />
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Alta de nuevas Camisetas</h2>
          </div>
          <div>
            <BootstrapForm
              label='Categoria'
              type='text'
              name='category'
              value={productoForm.category}
              change={handleChange}
            />
          </div>
          <div>
            <BootstrapForm
              label='Nombre'
              type='text'
              name='name'
              value={productoForm.name}
              change={handleChange}
            />
          </div>
          <div>
            <BootstrapForm
              label='Descripcion'
              type='text'
              name='description'
              value={productoForm.description}
              change={handleChange}
            />
          </div>
          <div>
            <BootstrapForm
              label='Precio'
              type='number'
              name='price'
              value={productoForm.price}
              change={handleChange}
            />
          </div>
          <div>
            <BootstrapForm
              label='SKU'
              type='text'
              name='SKU'
              value={productoForm.SKU}
              change={handleChange}
            />
          </div>
          <div>
            <Button type='submit' variant='warning' size='sm'>
              Agregar
            </Button>
          </div>
        </form>
        <h2>Listado de productos</h2>
        <div style={styles.cards}>
          {productos.map((producto) => (
            <ABMComponent
              datos={{ ...producto.data(), id: producto.id }}
              clickCambiar={handleClickCambiar}
              clickDelete={handleCLickDelete}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default ProductsCamisetas;
