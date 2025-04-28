import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import Clientes from "./components/clientes";
import Dashboard from "./components/dashboard";
import Historial from "./components/historial";
import Registro from "./components/registro";
import Login from "./components/login";
import Signup from "./components/signup";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-links">
            <li>
              <Link to="/clientes" className="navbar-link">Clientes</Link>
            </li>
            <li>
              <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            </li>
            <li>
              <Link to="/historial-de-interacciones" className="navbar-link">Historial de Interacciones</Link>
            </li>
            <li>
              <Link to="/registro-de-ventas" className="navbar-link">Registro de Ventas</Link>
            </li>
          </ul>
          <div className="auth-links">
            <Link to="/login" className="navbar-link">Inicio de Sesión</Link>
            <Link to="/signup" className="navbar-link">Registro</Link>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/historial-de-interacciones" element={<Historial />} />
            <Route path="/registro-de-ventas" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;