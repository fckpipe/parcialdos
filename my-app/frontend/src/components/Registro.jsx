import React, { useState } from 'react';
import api from '../services/api';

function Registro({ setView }) {
  const [form, setForm] = useState({
    nombre: '',
    fechaNacimiento: '',
    cedula: '',
    correo: '',
    celular: '',
    ciudad: '',
    contraseña: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/newUser', form);
      setView('login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Registro</h2>
      <form onSubmit={handleRegistro}>
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input type="date" name="fechaNacimiento" placeholder="Fecha de Nacimiento" value={form.fechaNacimiento} onChange={handleChange} required />
        <input type="text" name="cedula" placeholder="Cédula" value={form.cedula} onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Correo" value={form.correo} onChange={handleChange} required />
        <input type="tel" name="celular" placeholder="Celular" value={form.celular} onChange={handleChange} required />
        <input type="text" name="ciudad" placeholder="Ciudad" value={form.ciudad} onChange={handleChange} required />
        <input type="password" name="contraseña" placeholder="Contraseña" value={form.contraseña} onChange={handleChange} required />
        <button type="submit">Registrarse</button>
      </form>
      <button onClick={() => setView('login')}>Volver al Login</button>
    </div>
  );
}

export default Registro;
