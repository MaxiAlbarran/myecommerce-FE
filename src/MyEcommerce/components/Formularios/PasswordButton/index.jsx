import React, { useState } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

const PasswordButton = (props) => {
  const { name, value, change } = props;
  const [access, setAccess] = useState('password');
  const [buttonText, setButtonText] = useState('Mostrar');
  const handleClicShowPassword = (e) => {
    if (access === 'password') {
      setButtonText('Mostrar');
      setAccess('text');
      setButtonText('Ocultar');
    } else if (access === 'text') {
      setButtonText('Ocultar');
      setAccess('password');
      setButtonText('Mostrar');
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId={'formBasic' + name}>
          <Form.Label>Contraseña</Form.Label>
          <InputGroup className='mb-3'>
            <FormControl
              aria-describedby='basic-addon2'
              type={access}
              name={name}
              value={value}
              onChange={change}
            />
            <Button
              size='sm'
              variant='danger'
              id='button-addon2'
              onClick={handleClicShowPassword}
            >
              {buttonText}
            </Button>
          </InputGroup>
          <Form.Text className='text-muted'>
            Solo usted sabrá su contraseña
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

export default PasswordButton;
