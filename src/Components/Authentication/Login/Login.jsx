import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../Firebase/firebase'
import { useHistory } from 'react-router-dom';
import BootstrapForm from '../../Common/Forms/BootstrapForm/index';
import LoadingButton from '../../Common/Forms/LoadingButton/index';
import Alerts from '../../Common/Forms/Alerts/index';

const Login = () => {
  const [usuario, setUsuario] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState({ variant: '', text: '' });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let email = usuario.email;
    let password = usuario.password;
    try {
      const userTrue = await firebase.auth.signInWithEmailAndPassword(
        email,
        password
      );
      setLoading(false);
      if (userTrue.user.uid !== 'FvLD4DXtjvOsqEPtMwZcViqdrgx2') {
        history.push('Home/Destacados');
      }
    } catch (e) {
      setLoading(false);
      if (e.code === 'auth/invalid-email') {
        setAlerts({
          variant: 'warning',
          text: 'El Email ingresado no es valido o no concuerda',
        });
      } else if (e.code === 'auth/wrong-password') {
        setAlerts({
          variant: 'warning',
          text: 'La contraseña ingresada no existe o no concuerda con el Email ingresado',
        });
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUsuario({ ...usuario, [name]: value });
  };

  return (
    <div>
      <h1>Bienvenido a My Ecommerce!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Ingrese sus datos para observar nuestros productos!</h3>
        </div>
        <div>
          <BootstrapForm
            label='Email'
            type='email'
            name='email'
            value={usuario.email}
            change={handleChange}
            message='No compartiremos su Correo electronico con nadie'
          />
        </div>
        <div>
          <BootstrapForm
            label='Contraseña'
            type='password'
            name='password'
            value={usuario.password}
            change={handleChange}
            message='Solo usted sabrá su contraseña'
          />
        </div>
        <div>
          <LoadingButton type='submit' variant='danger' loading={loading}>
            Ingresar
          </LoadingButton>
        </div>
        <div>
          <span>
            <Link to='/Registro'>Aun no me he registrado!</Link>
          </span>
        </div>
        <div>
          <Alerts variant={alerts.variant} text={alerts.text} />
        </div>
      </form>
    </div>
  );
};

export default Login;
