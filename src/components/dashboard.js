import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

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

  // Datos de ejemplo para el gráfico
  const ventasPorMes = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ventas por Mes',
        data: [12, 19, 8, 15, 10, 17],
        backgroundColor: '#4A90E2',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Dashboard del Administrador</h2>
      <div style={{ maxWidth: 600, margin: "0 auto 30px auto", background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0px 4px 6px rgba(0,0,0,0.08)" }}>
        <h3 style={{ textAlign: "center" }}>Ventas por Mes</h3>
        <Bar data={ventasPorMes} options={chartOptions} />
      </div>
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
          <li>Actualizar Información de Usuario</li>
          <li>Configurar Notificaciones</li>  
          <li>Generar Reportes</li>
          <li>Administrar Productos</li>
          <li>Ver Estadísticas de Ventas</li>
          <li>Actualizar Información de Clientes</li>
          <li>Configurar Integraciones</li>
          <li>Ver Actividad Reciente</li>
          <li>Gestionar Campañas de Marketing</li>
          <li>Ver Análisis de Clientes</li>
          <li>Gestionar Documentos Adjuntos</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;