import React, { useState } from 'react';
import '../styles/Login.css'; // Corrected path

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inicio de sesión:", credentials);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Inicio de Sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Usuario:
          <input type="text" name="username" value={credentials.username} onChange={handleChange} className="login-input" />
        </label>
        <label className="login-label">
          Contraseña:
          <input type="password" name="password" value={credentials.password} onChange={handleChange} className="login-input" />
        </label>
        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
