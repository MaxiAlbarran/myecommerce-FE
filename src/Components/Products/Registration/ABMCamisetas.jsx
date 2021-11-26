import React, { useState } from 'react';
import ABMComponent from './Common/index';
import LoadingSpinner from '../../Common/Spinner/index';
import BootstrapForm from '../../Common/Forms/BootstrapForm';
import { Button } from 'react-bootstrap';
import useShowProducts from '../../../hooks/useShowProducts';
import useDelete from '../../../hooks/ABM/useDelete';
import useSubmitProduct from '../../../hooks/ABM/useSubmitProduct';
import './ABM.css'

const ProductsCamisetas = () => {
  const [productoForm, setProductoForm] = useState({
    name: '',
    description: '',
    price: '',
    id: null,
    SKU: '',
    category: '',
    img: '',
  });
 
  const [productos, loading] = useShowProducts('camisetas');
  const [handleSubmit] = useSubmitProduct('camisetas', productoForm);
  const [handleCLickDelete] = useDelete('camisetas');
  
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
            <h2>Alta de productos camisetas</h2>
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
            <BootstrapForm
              label='Imagen'
              type='text'
              name='img'
              value={productoForm.img}
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

export default ProductsCamisetas;
