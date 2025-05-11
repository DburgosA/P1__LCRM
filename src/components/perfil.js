import React from 'react';

function Perfil() {
  // Datos simulados de usuario
  const usuario = {
    nombre: "Juan Pérez",
    rut: "12.345.678-9",
    correo: "juan.perez@empresa.com",
    telefono: "+56 9 1234 5678",
    empresa: "Empresa S.A.",
    cargo: "Administrador"
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "30px auto",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      padding: "30px"
    }}>
      <h2 style={{ textAlign: "center", color: "#4A90E2" }}>Perfil de Usuario</h2>
      <div style={{ marginTop: "20px" }}>
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>RUT:</strong> {usuario.rut}</p>
        <p><strong>Correo:</strong> {usuario.correo}</p>
        <p><strong>Teléfono:</strong> {usuario.telefono}</p>
        <p><strong>Empresa:</strong> {usuario.empresa}</p>
        <p><strong>Cargo:</strong> {usuario.cargo}</p>
      </div>
    </div>
  );
}

export default Perfil;
