import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import LoadingButton from '../../components/Formularios/LoadingButton/index';
import BootstrapForm from '../../components/Formularios/BootstrapForm/index';
import Alerts from '../../components/Formularios/Alerts/index';
import { Button } from 'react-bootstrap';

const Registration = () => {
  const [info, setInfo] = useState({
    nombre: '',
    apellido: '',
    email: '',
    dni: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState({ variant: '', text: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log('Formulario completado', info);
    let email = info.email;
    let password = info.password;
    try {
      const newUser = await firebase.registro.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log('Usuario creado', newUser);
      const document = await firebase.db.collection('clientes').add({
        nombre: info.nombre,
        apellido: info.apellido,
        dni: info.dni,
        id: newUser.user.uid,
      });
      setAlerts({ variant: 'success', text: 'Registro exitoso' });
      console.log('Nuevo documento', document);
      setLoading(false);
    } catch (e) {
      if (e.code === 'auth/invalid-email') {
        setAlerts({
          variant: 'danger',
          text: 'Verifique su Email, no cumple con lo esperado',
        });
      } else if (e.code === 'auth/weak-password') {
        setAlerts({
          variant: 'danger',
          text: 'La contraseña debe tener al menos 6 caracteres',
        });
      } else if (e.code === 'auth/email-already-in-use') {
        setAlerts({
          variant: 'danger',
          text: 'Este Email ya se encuentra en uso',
        });
      }
      console.log(e);
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log('hola', name, value);
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <div>
        <Button
          type='button'
          as={Link}
          to='/'
          variant='danger'
          size='sm'
          style={{
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          Iniciar sesion
        </Button>
      </div>
      <h1>Complete con sus datos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <BootstrapForm
            label='Nombre'
            type='text'
            name='nombre'
            value={info.nombre}
            change={handleChange}
            message='Ingrese su nombre'
          />
        </div>
        <div>
          <BootstrapForm
            label='Apellido'
            type='text'
            name='apellido'
            value={info.apellido}
            change={handleChange}
            message='Ingrese su apellido'
          />
        </div>
        <div>
          <BootstrapForm
            label='Email'
            type='email'
            name='email'
            value={info.email}
            change={handleChange}
            message='Ingrese su direccion de correo electronico'
          />
        </div>
        <div>
          <BootstrapForm
            label='DNI'
            type='number'
            name='dni'
            value={info.dni}
            change={handleChange}
            message='Ingrese su numero de Documento Nacional de Identidad'
          />
        </div>
        <div>
          <BootstrapForm
            label='Contraseña'
            type='password'
            name='password'
            value={info.password}
            change={handleChange}
            message='Ingrese una contraseña mayor a 6 caracteres'
          />
        </div>
        <div>
          <LoadingButton type='submit' variant='danger' loading={loading}>
            Registrarse
          </LoadingButton>
        </div>
        <div>
          <Alerts variant={alerts.variant} text={alerts.text} />
        </div>
      </form>
    </div>
  );
};

export default Registration;
