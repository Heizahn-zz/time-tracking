import React from 'react';
import imgPerfil from '../images/image-jeremy.png';
import '../styles/SASS/Perfil.scss';

function dia(){
  let text= "Dia";
  return(
    console.log(text)
  );
};

function semana(){
  let text= "Semana";
  return(
    console.log(text)
  );
};

function mes(){
  let text= "Mes";
  return(
    console.log(text)
  );
};


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
    <div className="buttons">
            <button className="buttonDia" type="button" onClick={dia}>Daily</button>
            <button className="buttonSemana" type="button" onClick={semana}>Weekly</button>
            <button className="buttonMes" type="button" onClick={mes}>Monthly</button>
          </div>
      </div>
  );
};


export {Perfil};