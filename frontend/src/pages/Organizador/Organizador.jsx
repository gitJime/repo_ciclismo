import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar'; 
import Card from '../../components/card/Card';
import './organizador.scss';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch('/http://localhost:8800/api/evento/obtener')
      .then(response => response.json())
      .then(data => setEventos(data))
      .catch(error => console.error('Error fetching eventos:', error));
  }, []);

  return (
    <div>
      <div className="organizador">
        <Navbar />
      </div>
      <div className="cards-container">
        {eventos.map(evento => (
          <Card 
            key={evento._id}
            image={evento.imagen}
            title={evento.nombre}
            description={evento.descripcion}
          />
        ))}
      </div>
    </div>
  );
};

export default Eventos;
