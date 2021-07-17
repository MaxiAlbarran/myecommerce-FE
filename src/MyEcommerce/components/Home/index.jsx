import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const HomeComponent = (props) => {
  const { datos, category, bg, text, border } = props;
  console.log(datos);

  return (
    <div>
      <Card
        style={{ width: '20rem', height: 'auto' }}
        border={border}
        bg={bg}
        text={text}
      >
        <Card.Body>
          <Card.Img variant='top' src={datos.img} />
          <Card.Title>{datos.name}</Card.Title>
          <Card.Text>ARS ${datos.price}</Card.Text>
          <Card.Text>Stock: {datos.SKU}</Card.Text>
          <Card.Text>{datos.description}</Card.Text>
          <Card.Link as={Link} to={'/Detalle/' + category + '/' + datos.id}>
            <Button variant='danger' size='sm'>
              Ver detalle
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeComponent;
