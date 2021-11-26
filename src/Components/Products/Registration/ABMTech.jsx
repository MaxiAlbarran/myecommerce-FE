import React, { useState } from 'react';
import ABMComponent from './Common/index';
import LoadingSpinner from '../../Common/Spinner/index';
import BootstrapForm from '../../Common/Forms/BootstrapForm';
import { Button } from 'react-bootstrap';
import useShowProducts from '../../../hooks/useShowProducts';
import useSubmitProduct from '../../../hooks/ABM/useSubmitProduct';
import useDelete from '../../../hooks/ABM/useDelete';
import './ABM.css'


const ProductsTech = () => {
  const [productoForm, setProductoForm] = useState({
    name: '',
    description: '',
    price: '',
    id: null,
    SKU: '',
    category: '',
    img: null,
  });
  const [productos, loading] = useShowProducts('tecnologia');
  const [handleSubmit] = useSubmitProduct('tecnologia', productoForm);
  const [handleCLickDelete] = useDelete('tecnologia');

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProductoForm({ ...productoForm, [name]: value });
  };

  const handleClickCambiar = (producto) => {
    setProductoForm(producto);
    console.log(producto);
  };

  if (loading) {
    return <LoadingSpinner variant='danger' />;
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Alta de productos de tecnologia</h2>
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
        <div className="cards">
          {productos.map((producto, i) => (
            <ABMComponent
              key={producto.id}
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

export default ProductsTech;
