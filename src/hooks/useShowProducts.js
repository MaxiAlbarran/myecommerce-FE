import {useState, useEffect} from 'react'
import firebase from '../Firebase/firebase'

const useShowProducts = (coleccion) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showProducts = async () => {
      try {
        const documents = await firebase.db.collection(coleccion).get();
        setProducts(documents.docs);
        setLoading(false);
      } catch (e) {
        console.log('Error', e.message);
      }
    };
    showProducts();
  }, [products]);

  return [products, loading];

}

export default useShowProducts