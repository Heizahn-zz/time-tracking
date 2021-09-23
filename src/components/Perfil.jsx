import React from 'react';
import imgPerfil from '../images/image-jeremy.png';
import '../styles/SASS/Perfil.scss';
import { Buttons } from './Buttons';

function Perfil() {
  return (
    <div className="perfil">
      <div className="usuario">
        <img className="usuarioImg" src={imgPerfil} alt="imgPerfil" />
        <div className="usuarioName">
          <p className="usuarioParrafo">Report for</p>
          <h3 className="usuarioName">Jeremy Robson</h3>
        </div>
      </div>
      <Buttons /> 
    </div>
  );
};


export {Perfil};