import React, { useEffect, useState } from 'react';
import api from '../services/api';

function AdminTable() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    fetchRegistros();
  }, []);

  const fetchRegistros = async () => {
    try {
      const res = await api.get('/admin/tablaAdmin');
      setRegistros(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h3 className="title">Tabla de Ganadores</h3>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Celular</th>
            <th>Código</th>
            <th>Premio</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((registro, index) => (
            <tr key={index}>
              <td>{registro.fechaReclamo}</td>
              <td>{registro.reclamadoPor.nombre}</td>
              <td>{registro.reclamadoPor.cedula}</td>
              <td>{registro.reclamadoPor.celular}</td>
              <td>{registro.codigo}</td>
              <td>{registro.premio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
