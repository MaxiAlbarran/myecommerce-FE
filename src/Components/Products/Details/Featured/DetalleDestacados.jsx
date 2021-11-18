import React, { useEffect, useState } from 'react';
import firebase from '../../../../Firebase/firebase';
import LoadingSpinner from '../../../Common/Spinner';
import ProductsDetails from '../Common/index';

const Detalle = (props) => {
  const id = props.match.params.id;
  const [carga, setCarga] = useState(true);
  const [detalles, setDetalles] = useState({});
  const [showAlert, setShowAlert] = useState({ variant: '', text: '' });

  const handleClick = () => {
    setShowAlert({ variant: 'primary', text: 'Gracias por su compra!' });
  };

  useEffect(() => {
    const getProduct = async () => {
      const document = await firebase.db.doc('productos/' + id).get();
      setCarga(false);
      setDetalles(document.data());
    };
    getProduct();
  }, []);

  if (carga) {
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

export default Detalle;
