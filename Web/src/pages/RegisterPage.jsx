import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import axios from 'axios';
import './RegisterPage.css'

export const RegisterPage = () => {
  const navigate = useNavigate();

  const {nombre, apellido, usuario, correo, contrasena, celular, onInputChange, onResetForm,} = useForm({
    nombre: '',
    apellido: '',
    usuario: '',
    correo: '',
    contrasena: '',
    celular: '',
  });

  const onRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/usuario/registrar', {
        nombre: nombre,
        apellido: apellido,
        usuario: usuario,
        correo: correo,
        contrasena: contrasena,
        celular: celular,
      });

      if (response.status === 200) {
        // Registro exitoso, puedes redirigir al usuario al dashboard o realizar otras acciones
        navigate('/login', {
          replace: true,
          state: {
            logged: false,
            
          },
        });

        // También puedes limpiar el formulario aquí si es necesario
        onResetForm();
      } else {
        // Manejar errores en caso de que la respuesta no sea exitosa
        console.error('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  useEffect(() => {
    // Coloca cualquier lógica de redirección adicional aquí
  }, []);

  return (
    <div className='wrapper'>
      <form onSubmit={onRegister}>
        <br /><br /><br /><br />
        <h1>Registrarse</h1>

        <div className='input-group'>
          <input
            type='text'
            name='nombre'
            id='nombre'
            value={nombre}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='nombre'>Nombre:</label>
        </div>

        <div className='input-group'>
          <input
            type='text'
            name='apellido'
            id='apellido'
            value={apellido}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='apellido'>Apellido:</label>
        </div>

        <div className='input-group'>
          <input
            type='text'
            name='usuario'
            id='usuario'
            value={usuario}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='usuario'>Usuario:</label>
        </div>

        <div className='input-group'>
          <input
            type='email'
            name='correo'
            id='correo'
            value={correo}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='correo'>Correo:</label>
        </div>

        <div className='input-group'>
          <input
            type='password'
            name='contrasena'
            id='contrasena'
            value={contrasena}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='contrasena'>Contraseña:</label>
        </div>

        <div className='input-group'>
          <input
            type='text'
            name='celular'
            id='celular'
            value={celular}
            onChange={onInputChange}
            required
            autoComplete='off'
          />
          <label htmlFor='celular'>Celular:</label>
        </div>

        <button>Registrarse</button>
      </form>
    </div>
  );
};