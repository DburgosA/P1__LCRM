import React, { useState } from 'react';

function Registro() {
  const [venta, setVenta] = useState({ cliente: "", producto: "", monto: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenta({ ...venta, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Venta registrada:", venta);
    setVenta({ cliente: "", producto: "", monto: "" });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Registro de Ventas</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <label style={{ display: "block", marginBottom: "10px" }}>
          Cliente:
          <input
            type="text"
            name="cliente"
            value={venta.cliente}
            onChange={handleChange}
            style={{
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #CCCCCC",
              borderRadius: "5px",
              width: "100%",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Producto:
          <input
            type="text"
            name="producto"
            value={venta.producto}
            onChange={handleChange}
            style={{
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #CCCCCC",
              borderRadius: "5px",
              width: "100%",
            }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Monto:
          <input
            type="number"
            name="monto"
            value={venta.monto}
            onChange={handleChange}
            style={{
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #CCCCCC",
              borderRadius: "5px",
              width: "100%",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Registrar Venta
        </button>
      </form>
    </div>
  );
}

export default Registro;