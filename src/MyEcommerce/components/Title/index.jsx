import react from 'react';

const Titulo = ({ message }) => {
  const styles = {
    fontFamily: 'Prompt, Arial, sans-serif',
    fontSize: '60px',
    marginTop: '10px',
    marginBottom: '10px',
    textAlign: 'center',
  };

  return (
    <div>
      <header style={styles}> {message} </header>
    </div>
  );
};

export default Titulo;
