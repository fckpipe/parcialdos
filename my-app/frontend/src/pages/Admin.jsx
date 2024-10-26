import React from 'react';
import AdminTable from '../components/AdminTable';

function Admin() {
  return (
    <div>
      <h1>Administrador</h1>
      <AdminTable />
      <button onClick={() => { /* lógica de salir */ }}>Salir</button>
    </div>
  );
}

export default Admin;
