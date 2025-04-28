import React, { useState } from 'react';

function Clientes() {
  const [clientes, setClientes] = useState([
    { id: 1, nombre: "Juan Pérez", email: "juan.perez@example.com" },
    { id: 2, nombre: "María López", email: "maria.lopez@example.com" },
    { id: 3, nombre: "Carlos García", email: "carlos.garcia@example.com" },
    { id: 4, nombre: "Ana Martínez", email: "ana.martinez@example.com" },
    { id: 5, nombre: "Luis Hernández", email: "luis.hernandez@example.com" },
    { id: 6, nombre: "Sofía Torres", email: "sofia.torres@example.com" },
    { id: 7, nombre: "Miguel Sánchez", email: "miguel.sanchez@example.com" },
    { id: 8, nombre: "Laura Gómez", email: "laura.gomez@example.com" },
    { id: 9, nombre: "Pedro Díaz", email: "pedro.diaz@example.com" },
    { id: 10, nombre: "Lucía Ramírez", email: "lucia.ramirez@example.com" },
  ]);

  const agregarCliente = () => {
    const nuevoCliente = {
      id: clientes.length + 1,
      nombre: `Cliente ${clientes.length + 1}`,
      email: `cliente${clientes.length + 1}@example.com`,
    };
    setClientes([...clientes, nuevoCliente]);
  };

  const borrarCliente = (id) => {
    setClientes(clientes.filter(cliente => cliente.id !== id));
  };

  const editarCliente = (id) => {
    const nuevoNombre = prompt("Ingrese el nuevo nombre:");
    const nuevoEmail = prompt("Ingrese el nuevo email:");
    setClientes(clientes.map(cliente => 
      cliente.id === id ? { ...cliente, nombre: nuevoNombre, email: nuevoEmail } : cliente
    ));
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Gestión de Clientes</h2>
      <button
        onClick={agregarCliente}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Agregar Cliente
      </button>
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
            <th style={{ padding: "10px" }}>Nombre</th>
            <th style={{ padding: "10px" }}>Email</th>
            <th style={{ padding: "10px" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td style={{ padding: "10px" }}>{cliente.id}</td>
              <td style={{ padding: "10px" }}>{cliente.nombre}</td>
              <td style={{ padding: "10px" }}>{cliente.email}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => borrarCliente(cliente.id)}
                  style={{
                    backgroundColor: "#FF5733",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                >
                  Borrar
                </button>
                <button
                  onClick={() => editarCliente(cliente.id)}
                  style={{
                    backgroundColor: "#FFC107",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clientes;