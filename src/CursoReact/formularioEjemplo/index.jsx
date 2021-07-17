import React, { useState } from 'react';

const Formulario = () => {
  const [info, setInfo] = useState({
    nombre: '',
    apellido: '',
    email: '',
    DNI: '',
    password: '',
  });

  const handleSubmit = (event) => {
    console.log('Formulario completado', info);
    event.preventDefault();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log('hola', name, value);
    setInfo({ ...info, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type='text'
            name='nombre'
            value={info.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            type='text'
            name='apellido'
            value={info.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>DNI</label>
          <input
            type='number'
            name='DNI'
            value={info.DNI}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={info.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type='submit'>Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
