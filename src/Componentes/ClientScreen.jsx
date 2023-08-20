// src/ClientScreen.js

import React from 'react';
import './ClientScreen.css'; // Importa los estilos CSS

const ClientScreen = () => {
  return (
    <div className="container">
      <h1 className="header">Lista de Clientes</h1>
      <ul className="client-list">
        <li className="client-list-item">Cliente 1</li>
        <li className="client-list-item">Cliente 2</li>
        <li className="client-list-item">Cliente 3</li>
        {/* Puedes agregar más elementos aquí */}
      </ul>
    </div>
  );
};

export default ClientScreen;

