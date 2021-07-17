import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Alerts from '../Formularios/Alerts';

const ProductsDetails = (props) => {
  const { name, description, price, buy, compra, SKU } = props;
  const styles = [
    {
      name: {
        fontSize: '32px',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, Helvetica, sans-serif',
      },
      price: {
        fontSize: '20px',
        textAlign: 'center',
        padding: '10px 15px 10px 15px',
        fontFamily: 'Arial, Helvetica, sans-serif',
      },
      description: {
        padding: '10px 15px 10px 15px',
        fontFamily: 'Arial, Helvetica, sans-serif',
      },
      button: {
        display: 'block',
        marginLeft: 'auto ',
        marginRight: 'auto',
        marginBottom: '10px',
        marginTop: '10px',
      },
    },
  ];

  return (
    <div>
      <div>
        <Card bg='light' text='dark'>
          <Card.Title style={styles[0].name}>{name}</Card.Title>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Header as='h5'>Descripcion</Card.Header>
          <Card.Body>
            <Card.Text style={styles[0].description}>{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Header as='h5'>Precio</Card.Header>
          <Card.Body>
            <Card.Text style={styles[0].price}>ARS ${price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Header as='h5'>Stock keeping unit</Card.Header>
          <Card.Body>
            <Card.Text style={styles[0].price}>{SKU}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Button
          style={styles[0].button}
          variant='danger'
          size='sm'
          type='button'
          onClick={buy}
        >
          Comprar producto
        </Button>
      </div>
      <div>
        <Alerts variant={compra.variant} text={compra.text} />
      </div>
    </div>
  );
};

export default ProductsDetails;
