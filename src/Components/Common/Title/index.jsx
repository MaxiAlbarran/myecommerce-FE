import React from 'react';

const Titulo = ({ message, bg, letters }) => {
  const styles = {
    fontFamily: 'Arial',
    fontSize: '35px',
    fontWeight: 'bold',
    marginTop: '10px',
    marginBottom: '10px',
    textAlign: 'center',
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: `${bg}`,
        color:`${letters}`,
        alignItems: 'center',
        borderRadius: '20px',
        marginTop:'20px'
      }}
    >
      <header style={styles} > {message} </header>
    </div>
  );
};

export default Titulo;
