import React, { useState } from 'react';
import useGetProduct from '../../../../hooks/useGetproduct';
import LoadingSpinner from '../../../Common/Spinner';
import ProductsDetails from '../Common/index';

const DetalleCamisetas = (props) => {
  const id = props.match.params.id;
  const [detalles, loading] = useGetProduct('camisetas', id);
  const [showAlert, setShowAlert] = useState({ variant: '', text: '' });

  const handleClick = () => {
    setShowAlert({ variant: 'primary', text: 'Gracias por su compra!' });
  };


  if (loading) {
    return <LoadingSpinner variant='danger' />;
  } else {
    return (
      <div>
        <ProductsDetails
          name={detalles.name}
          description={detalles.description}
          price={detalles.price}
          SKU={detalles.SKU}
          buy={handleClick}
          compra={showAlert}
        />
      </div>
    );
  }
};

export default DetalleCamisetas;
