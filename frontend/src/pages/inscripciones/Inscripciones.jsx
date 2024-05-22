import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./inscripciones.scss";

const InscripcionForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');
  const [categoria, setCategoria] = useState('');
  const [equipo, setEquipo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [seguroSocial, setSeguroSocial] = useState('');

  const handleInscripcion = (e) => {
    e.preventDefault();
    // Lógica para enviar la información del formulario al servidor
  };

  return (
    <div>
      <Navbar />
      <div className="img-container">
        
        <div className="form-container">
          <div className="form-content">
            <h2>Formulario de Inscripción</h2>
            <form onSubmit={handleInscripcion}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="correo">Correo Electrónico:</label>
                <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="genero">Género:</label>
                <select id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} required>
                  <option value="">Selecciona</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="categoria">Categoría:</label>
                <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                  <option value="">Selecciona</option>
                  <option value="experto">Experto</option>
                  <option value="avanzado">Avanzado</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="femenil">Femenil</option>
                  <option value="titan">Titan</option>
                  <option value="electricas">Bicicletas eléctricamente asistidas</option>
                  <option value="novatos">Novatos</option>
                  <option value="contrareloj">Contrareloj</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="equipo">Equipo (si corresponde):</label>
                <input type="text" id="equipo" value={equipo} onChange={(e) => setEquipo(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección:</label>
              <textarea id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="seguroSocial">Número de Seguro Social:</label>
              <input type="text" id="seguroSocial" value={seguroSocial} onChange={(e) => setSeguroSocial(e.target.value)} required />
            </div>
            <div className="form-group">
              <button type="submit">Inscribirse</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscripcionForm;
