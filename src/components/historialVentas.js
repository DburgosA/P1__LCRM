import React, { useState } from 'react';

function HistorialVentas() {
  const [ventas] = useState([
    { id: 1, cliente: "Juan Pérez", fecha: "2023-01-05", producto: "Producto A", monto: 10000 },
    { id: 2, cliente: "María López", fecha: "2023-01-10", producto: "Producto B", monto: 15000 },
    { id: 3, cliente: "Carlos García", fecha: "2023-02-12", producto: "Producto C", monto: 8000 },
  ]);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Historial de Ventas</h2>
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
            <th style={{ padding: "10px" }}>Producto</th>
            <th style={{ padding: "10px" }}>Monto</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map(venta => (
            <tr key={venta.id}>
              <td style={{ padding: "10px" }}>{venta.id}</td>
              <td style={{ padding: "10px" }}>{venta.cliente}</td>
              <td style={{ padding: "10px" }}>{venta.fecha}</td>
              <td style={{ padding: "10px" }}>{venta.producto}</td>
              <td style={{ padding: "10px" }}>${venta.monto.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistorialVentas;
