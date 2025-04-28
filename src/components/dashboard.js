import React from 'react';

function Dashboard() {
  const sectionStyle = {
    padding: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  };

  const metricsStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  };

  const cardStyle = {
    padding: "15px",
    backgroundColor: "#F1F1F1",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "30%",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Dashboard del Administrador</h2>
      <div style={metricsStyle}>
        <div style={cardStyle}>
          <h3>Total de Clientes</h3>
          <p>100</p>
        </div>
        <div style={cardStyle}>
          <h3>Ventas del Mes</h3>
          <p>$50,000</p>
        </div>
        <div style={cardStyle}>
          <h3>Interacciones Recientes</h3>
          <p>25</p>
        </div>
      </div>
      <div style={sectionStyle}>
        <h3>Opciones de Gestión</h3>
        <ul>
          <li>Gestionar Clientes</li>
          <li>Registrar Ventas</li>
          <li>Ver Historial de Interacciones</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;