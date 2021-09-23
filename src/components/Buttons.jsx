import react from "react";
import '../styles/SASS/Perfil.scss'


var Buttons = () => {
    return(
        <div className="buttons">
            <button id="Dia" className="buttonDia" type="button">Daily</button>
            <button id="Semana" className="buttonSemana" type="button">Weekly</button>
            <button id="Mes" className="buttonMes" type="button">Monthly</button>
        </div>
    );
}
export {Buttons};