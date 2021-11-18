import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = ({ variant }) => {
  const styles = {
    spinner: {
      height: '100px',
      width: '100px',
      display: 'block',
      marginLeft: 'auto ',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginTop: '200px',
    },
  };
  return (
    <Spinner
      animation='border'
      role='status'
      variant={variant}
      style={styles.spinner}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};

export default LoadingSpinner;
