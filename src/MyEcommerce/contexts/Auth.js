import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import firebase from '../config/firebase';

export const AuthContext = React.createContext({ usuario: null });

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const history = useHistory();

  useEffect(() => {
    firebase.auth.onAuthStateChanged(function (user) {
      console.log(user);
      setUsuario(user);
      if (user && user.uid === 'FvLD4DXtjvOsqEPtMwZcViqdrgx2') {
        setIsOwner(true);
      } else setIsOwner(false);
    });
  }, []);

  const handleClickLogOut = async () => {
   
    try{
      const userOut = await firebase.auth.signOut();
      console.log('Sesion cerrada', userOut);
    }catch(e){
      console.log(e)
    }
    
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        isOwner,
        handleClickLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
