import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const LoadingButton = (props) => {
  const { variant, loading, type} = props;

  return (
    <Button variant={variant} disabled={loading} type={type} size="sm">
      {loading && (
        <Spinner
          as='span'
          animation='border'
          size='sm'
          role='status'
          aria-hidden='true'
        />
      )}
      {props.children}
    </Button>
  );
};

export default LoadingButton;
