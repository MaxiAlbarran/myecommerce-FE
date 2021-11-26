import { useState, useEffect } from "react";
import firebase from '../Firebase/firebase';

const useGetProduct = (coleccion, id) => {
  const [carga, setCarga] = useState(true);
  const [detalles, setDetalles] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const document = await firebase.db.doc(`${coleccion}/` + id).get();
      setCarga(false);
      setDetalles(document.data());
    };
    getProduct();
  }, [coleccion, id]);

    return [detalles, carga];
}

export default useGetProduct;