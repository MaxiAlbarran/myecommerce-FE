import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

const ABMComponent = (props) => {
  const { datos, clickCambiar, clickDelete } = props;
  const styles = {
    boton: {
      marginLeft: '10px',
    },
  };

  return (
    <Card style={{ width: '18rem', marginBottom: '10px' }} border='dark'>
      <Card.Body>
        <Card.Title>{datos.name}</Card.Title>
        <ListGroup variant='flush'>
          <ListGroup.Item>${datos.price}</ListGroup.Item>
          <ListGroup.Item>SKU = {datos.SKU}</ListGroup.Item>
        </ListGroup>
        <Button
          type='button'
          onClick={(e) => clickCambiar(datos)}
          variant='danger'
          size='sm'
        >
          Modificar
        </Button>
        <Button
          style={styles.boton}
          type='button'
          onClick={(e) => clickDelete(datos)}
          variant='danger'
          size='sm'
        >
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ABMComponent;
