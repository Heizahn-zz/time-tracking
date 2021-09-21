import React from "react";
import '../styles/SASS/WorkPerfil.scss'


var WorkPerfil = () => {
  return(
    <div className="workPerfil">
      <div className="workImg"></div>
      <div className="workDetalles">
          <div className="workTime">
            <p className="title">Work</p>
            <h1 className="horas">32hrs</h1>
          </div>
          <div className="workTimeWeek">
            <p className="moreoption">. . .</p>
            <p className="weekTime">Last Week-36hrs</p>
          </div>
        </div>
    </div>
  );
};

export {WorkPerfil};