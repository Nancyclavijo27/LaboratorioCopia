import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Pacientes from './Componentes/Pacientes';
import Clientes from './Componentes/ClientScreen';

function App() {
  return (
    <Routes>
      <Route path="/pacientes" element={<Pacientes />} />
      <Route path="/clientes" element={<Clientes />} />
    </Routes>
  );
}

export default App;

