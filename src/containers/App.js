import React from 'react'
import { Perfil } from '../components/Perfil';
import { WorkPerfil } from '../components/WorkPerfil';
import '../styles/SASS/App.scss';

function App() {
  return (
    <React.StrictMode>
      <Perfil />
      <WorkPerfil />
    </React.StrictMode>
  );
}

export default App;
