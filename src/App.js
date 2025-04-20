import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clientes from "./clientes";
import Dashboard from "./dashboard";
import Historial from "./historial";
import Registro from "./registro";

function App() {
  return (
    <Router>
      <div>
        <h2>Proyecto 1</h2>
        <nav>
          <ul>
            <li><Link to="/clientes">Clientes</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/registro-de-ventas">Registro de Ventas</Link></li>
            <li><Link to="/historial-de-interacciones">Historial de Interacciones</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registro-de-ventas" element={<Registro />} />
          <Route path="/historial-de-interacciones" element={<Historial />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;