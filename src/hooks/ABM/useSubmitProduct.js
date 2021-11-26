import firebase from '../../Firebase/firebase';

const useSubmitProduct = (coleccion, producto) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let newProducts;
      if (producto.id === null) {
        newProducts = await firebase.db
          .collection(`${coleccion}`)
          .add(producto);
      } else {
        newProducts = await firebase.db
          .doc(`${coleccion}/${producto.id}`)
          .set(producto);
      }
      console.log('Producto agregado', newProducts);
    } catch (e) {
      alert(e.message);
      console.log(e);
    }
  };
  
  return [handleSubmit];
}  
    

export default useSubmitProduct