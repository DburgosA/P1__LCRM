import React, { useState } from 'react';
import '../styles/Signup.css'; // Corrected path

function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    companyName: "",
    companyRut: "",
    companyAddress: "",
    companyEmail: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cuenta creada:", user);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Registro</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Datos del usuario */}
        <label className="signup-label">
          Usuario:
          <input type="text" name="username" value={user.username} onChange={handleChange} className="signup-input" />
        </label>
        <label className="signup-label">
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} className="signup-input" />
        </label>
        <label className="signup-label">
          Contraseña:
          <input type="password" name="password" value={user.password} onChange={handleChange} className="signup-input" />
        </label>
        <label className="signup-label">
          Repetir contraseña:
          <input type="password" name="password" value={user.password} onChange={handleChange} className="signup-input" />
        </label>
        {/* Datos de la empresa */}
        <label className="signup-label">
          Nombre de la empresa:
          <input type="text" name="companyName" value={user.companyName} onChange={handleChange} className="signup-input" />
        </label>
        <label className="signup-label">
          RUT social de la empresa:
          <input type="text" name="companyRut" value={user.companyRut} onChange={handleChange} className="signup-input" />
        </label>
        <label className="signup-label">
          Dirección de la empresa:
          <input type="text" name="companyAddress" value={user.companyAddress} onChange={handleChange} className="signup-input" />
        </label>
        <label className="signup-label">
          Correo de la empresa:
          <input type="email" name="companyEmail" value={user.companyEmail} onChange={handleChange} className="signup-input" />
        </label>
        <button type="submit" className="signup-button">Crear Cuenta</button>
      </form>
    </div>
  );
}

export default Signup;
