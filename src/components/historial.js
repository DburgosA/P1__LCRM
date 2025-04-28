import React, { useState } from 'react';

function Historial() {
  const [interacciones, setInteracciones] = useState([
    { id: 1, cliente: "Juan Pérez", fecha: "2023-01-01", detalle: "Llamada de seguimiento" },
    { id: 2, cliente: "María López", fecha: "2023-01-02", detalle: "Correo de presentación" },
  ]);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Historial de Interacciones</h2>
      <table
        border="1"
        style={{
          marginTop: "20px",
          width: "100%",
          textAlign: "left",
          borderCollapse: "collapse",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#4A90E2", color: "white" }}>
            <th style={{ padding: "10px" }}>ID</th>
            <th style={{ padding: "10px" }}>Cliente</th>
            <th style={{ padding: "10px" }}>Fecha</th>
            <th style={{ padding: "10px" }}>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {interacciones.map(interaccion => (
            <tr key={interaccion.id}>
              <td style={{ padding: "10px" }}>{interaccion.id}</td>
              <td style={{ padding: "10px" }}>{interaccion.cliente}</td>
              <td style={{ padding: "10px" }}>{interaccion.fecha}</td>
              <td style={{ padding: "10px" }}>{interaccion.detalle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Historial;