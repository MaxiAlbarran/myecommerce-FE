import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import { useHistory } from 'react-router-dom';
import BootstrapForm from '../../components/Formularios/BootstrapForm/index';
import LoadingButton from '../../components/Formularios/LoadingButton/index';
import Alerts from '../../components/Formularios/Alerts/index';
import Menu from '../../components/Menu/MenuUsuarios/index';

const Login = () => {
  const [usuario, setUsuario] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState({ variant: '', text: '' });
  const [isLogin, setIsLogin] = useState(false);
  const [owner, setOwner] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Formulario completado', usuario);
    let email = usuario.email;
    let password = usuario.password;
    try {
      const userTrue = await firebase.registro.signInWithEmailAndPassword(
        email,
        password
      );
      setLoading(false);
      console.log('Usuario valido', userTrue);
      if (userTrue.user.uid === 'FvLD4DXtjvOsqEPtMwZcViqdrgx2') {
        setOwner(true);
      } else {
        history.push('Home/Destacados');
      }
      setIsLogin(true);
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
      console.log(e);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUsuario({ ...usuario, [name]: value });
  };

  return (
    <div>
      <Menu login={isLogin} owner={owner} />
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
