import firebase from '../../Firebase/firebase'

const useDelete = (coleccion) => {
  const handleCLickDelete = async (producto) => {
    try {
      const documentDelete = await firebase.db
        .doc(`${coleccion}/` + producto.id)
        .delete();
      console.log(documentDelete);
    } catch (e) {
      console.log('error', e.message);
    }
  };
  return [handleCLickDelete];
}

export default useDelete;