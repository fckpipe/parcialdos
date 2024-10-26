import React, { useState } from 'react';
import Login from './components/Login';
import Registro from './components/Registro';
import User from './pages/User';
import Admin from './pages/Admin';

function App() {
  const [view, setView] = useState('login');

  const renderView = () => {
    switch(view) {
      case 'login':
        return <Login setView={setView} />;
      case 'registro':
        return <Registro setView={setView} />;
      case 'user':
        return <User />;
      case 'admin':
        return <Admin />;
      default:
        return <Login setView={setView} />;
    }
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}

export default App;
