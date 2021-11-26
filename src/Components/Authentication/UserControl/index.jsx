import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

const UsersComponent = (props) => {
  const { datos, clickDelete } = props;
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
          <ListGroup.Item>{datos.surname}</ListGroup.Item>
          <ListGroup.Item>{datos.username}</ListGroup.Item>
          <ListGroup.Item>{datos.idIngreso}</ListGroup.Item>
        </ListGroup>
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

export default UsersComponent;
