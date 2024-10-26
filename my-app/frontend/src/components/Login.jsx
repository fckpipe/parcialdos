import React, { useState } from 'react';
import api from '../services/api';

function Login({ setView }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { correo: email, contraseña: password });
      localStorage.setItem('token', res.data.token);
      if (res.data.rol === 'admin') {
        setView('admin');
      } else {
        setView('user');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Ingresar</button>
      </form>
      <button onClick={() => setView('registro')}>Registrarse</button>
    </div>
  );
}

export default Login;
