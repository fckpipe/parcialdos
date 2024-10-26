import React, { useState, useEffect } from 'react';
import api from '../services/api';

function RedimirCodigo({ userId }) {
  const [codigo, setCodigo] = useState('');
  const [resultado, setResultado] = useState('');
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchRegistros();
    }
  }, [userId]);

  const handleRedimir = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await api.post('/codigos/registroCodigo', { userId, codigo }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setResultado(res.data.message);
      fetchRegistros();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRegistros = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await api.get('/codigos/tablaUser', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { userId }
      });
      setRegistros(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Registrar Código</h2>
      <form onSubmit={handleRedimir}>
        <input type="text" placeholder="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} required />
        <button type="submit">Registrar</button>
      </form>
      <p>{resultado}</p>
      <h3>Códigos Registrados</h3>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Código</th>
            <th>Premio</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro, index) => (
            <tr key={index}>
              <td>{registro.fecha}</td>
              <td>{registro.codigo}</td>
              <td>{registro.premio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RedimirCodigo;



