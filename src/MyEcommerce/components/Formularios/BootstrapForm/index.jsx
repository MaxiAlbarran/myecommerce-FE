import React from 'react';
import { Form } from 'react-bootstrap';
import PasswordButton from '../PasswordButton';

const BootstrapForm = (props) => {
  const { label, type, placeholder, name, value, change, message } = props;
  if (type === 'password') {
    return (
      <div>
        <PasswordButton name={name} value={value} change={change} />
      </div>
    );
  } else {
    return (
      <div>
        <Form>
          <Form.Group controlId={'formBasic' + name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              size='sm'
              type={type}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={change}
            />
            <Form.Text className='text-muted'>{message}</Form.Text>
          </Form.Group>
        </Form>
      </div>
    );
  }
};

export default BootstrapForm;
