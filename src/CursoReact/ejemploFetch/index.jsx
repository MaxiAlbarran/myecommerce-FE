import React from 'react';
import { Link } from 'react-router-dom';

const HomeComponent = ({datos}) => {
  const styles = {
    imagen: {
      width: '150px',
    },
  };
  return (
    <div>
      <div>
        <h4>Productos</h4>
        <ul>
          <li>{datos.name}</li>
          <img src={datos.photo_url} style={styles.imagen}></img>
          <button type='button'><Link to={"/Detalle/" + datos.id} >Ver detalle</Link></button>
        </ul>
      </div>
    </div>
  );
};

export default HomeComponent;
