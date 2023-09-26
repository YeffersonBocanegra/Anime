import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Logo from './img/LOGO.png';
import MangaASD from './img/MangaASD.png';
import './Navbar.css';

export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    // Realiza las tareas de cierre de sesión aquí, como limpiar tokens o cookies.

    // Redirecciona al usuario a HomePage.jsx después del cierre de sesión.
    navigate('/');
  };

  return (
    <>
      <header>
        <h1>
          <a className='Logo' href="/">
            <img src={Logo} alt="" />
            <img src={MangaASD} alt="" className="MangaASD" />
          </a>
        </h1>

        {state?.logged ? (
          <div className='user'>
            <span className='username'>{state?.usuario}</span>
            <button className='btn-logout' onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
        ) : (
          <nav>
            <Link to='/login'>Iniciar sesión</Link>
            <button className='registrarse'>
              <Link to='/register'>Registrarse</Link>
            </button>
          </nav>
        )}
      </header>
      <Outlet />
    </>
  );
};



