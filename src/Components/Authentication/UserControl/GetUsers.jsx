import React, { useEffect, useState } from 'react';
import firebase from '../../../Firebase/firebase';
import LoadingSpinner from '../../Common/Spinner/index';
import Titulo from '../../Common/Title/index';
import UsersComponent from './index';

const GetUsers = () => {
  const [clients, setClients] = useState([]);
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(false);
  const styles = {
    layout: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '5px',
    },
  };

  useEffect(() => {
    const showClients = async () => {
      try {
        setLoading(true);
        const documents = await firebase.db.collection('clientes').get();
        setClients(documents.docs);
        setLoading(false);
        console.log("Estos son los clientes",clients);
      } catch (e) {
        console.log('Error', e.message);
      }
    };
    if (reload) {
      showClients();
    }
  }, []);

  const handleCLickDelete = async (clients) => {
    try {
      setReload(false);
      const documentDelete = await firebase.db
        .doc('clientes/' + clients.id)
        .delete();
      setReload(true);
      console.log(documentDelete);
      await firebase.auth.currentUser.delete();
    } catch (e) {
      console.log('error', e.message);
    }
  };

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
              clickDelete={handleCLickDelete}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default GetUsers;