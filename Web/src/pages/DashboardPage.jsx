import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Importa axios
import './DashBoardPage.css';

export const DashboardPage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const [usuario, setUsuario] = useState(null); // Inicializa usuario como nulo

  useEffect(() => {
    // Hacemos una solicitud a la API en el useEffect
    fetch('http://localhost:3000/api/anime/mostrar')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));

    // Hacemos la solicitud a la API para obtener el usuario logeado
    axios.post('http://localhost:3000/api/usuario/login')
      .then((response) => {
        // Si la solicitud es exitosa, establece el usuario en el estado
        setUsuario(response.data.usuario);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez
  return (
    <div>
      <h1 className="title">Animes</h1>
      {usuario && <p>Bienvenido, {usuario.nombre}</p>}
      <div className="animes">
        {data.map((d, i) => (
          <div key={i} className="producto">
            <div className="producto_img">
              <img src={d.imagen} alt="" />
            </div>
            <div className="producto_footer">
              <h1 className="titulo">{d.titulo}</h1>
              <h2 className="descripcion">{d.descripcion}</h2>
              <h2 className='price'>Uds: {d.cantidad_almacen}</h2>
              <p className='estado'>
                {d.estado === "0" ? "Alquilado" : "Disponible"}
              </p>
              <p className="price">${d.precio}</p>
            </div>
            <div className="buttom">
              <button className="btn">Alquilar</button>
            </div>
          </div>
        ))}
      </div>

    </div>

  );
};



