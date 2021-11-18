import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Alerts = (props) => {
  const { variant, text, button } = props;

  return (
    <Alert variant={variant}>
      <Alert.Heading>{text}</Alert.Heading>
      {button && (
        <>
          <hr />
          <div>
            <Button as={Link} to='/' variant='outline-success'>Confirmacion de cuenta</Button>
          </div>
        </>
      )}
    </Alert>
  );
};

export default Alerts;
