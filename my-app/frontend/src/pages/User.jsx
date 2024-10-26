import React from 'react';
import RedimirCodigo from '../components/RedimirCodigo';
import UserTable from '../components/UserTable';

function User() {
  const userId = 'id_del_usuario'; // esto debería ser dinámico

  return (
    <div>
      <h1>Usuario</h1>
      <RedimirCodigo userId={userId} />
      <UserTable userId={userId} />
      <button onClick={() => { /* lógica de salir */ }}>Salir</button>
    </div>
  );
}

export default User;
