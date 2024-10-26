import React, { useEffect, useState } from 'react';
import api from '../services/api';

function UserTable({ userId }) {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchRegistros();
    }
  }, [userId]);

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

export default UserTable;



