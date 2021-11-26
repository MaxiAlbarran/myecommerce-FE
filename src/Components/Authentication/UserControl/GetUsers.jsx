import React from 'react';
import useDelete from '../../../hooks/ABM/useDelete';
import useShowProducts from '../../../hooks/useShowProducts';
import LoadingSpinner from '../../Common/Spinner/index';
import Titulo from '../../Common/Title/index';
import UsersComponent from './index';

const GetUsers = () => {
  const styles = {
    layout: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '5px',
    },
  };

  const [clients, loading] = useShowProducts('clientes');
  const [handleClickDelete] = useDelete('clientes')

  if (loading) {
    return (
      <div>
        <LoadingSpinner variant='dark' />
      </div>
    );
  } else {
    return (
      <div>
        <Titulo message='Clientes' />
        <div style={styles.layout}>Estos son los clientes</div>
        <div style={styles.layout}>
          {clients.map((client, i) => (
            <UsersComponent
              key={client.id}
              datos={{ ...client.data(), id: client.id }}
              clickDelete={handleClickDelete}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default GetUsers;
