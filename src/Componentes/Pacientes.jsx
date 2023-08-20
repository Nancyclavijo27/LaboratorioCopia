import React from 'react';
import './Pacientes.css';
import { Link } from 'react-router-dom';

const Pacientes = () => {
  return (
    <div className="pacientes-container">
      <div className="header">
        <h2>Pacientes</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eos! Iusto eius harum porro, ab inventore, sapiente tenetur explicabo voluptatum consequuntur officia veritatis ut dolorem eos perferendis nihil labore et.</h4>
        <Link to="/clientes" className="button-link">
          Ir a la sección de Clientes
        </Link>
      </div>
      <div className="info-container">
        <div className="info-box">
          <h3>Cantidad de Exámenes</h3>
          <p>100</p>
        </div>
        <div className="info-box">
          <h3>Exámenes Pendientes</h3>
          <p>10</p>
        </div>
        <div className="info-box">
          <h3>Entrega de Resultados</h3>
          <p>90</p>
        </div>
        <div className="info-box">
          <h3>Doctor que Revisa</h3>
          <p>Dr. Smith</p>
        </div>
      </div>
      <button className="edit-button">Editar Paciente</button>
    </div>
  );
}

export default Pacientes;
