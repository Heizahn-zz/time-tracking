import React from 'react';
import '../styles/SASS/WorkPerfil.scss';

class WorkPerfil extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: [],
      isFetch: true,
    }
  }

  componentDidMount () {
  fetch('http://localhost:3000/tiempos')
    .then (response => response.json())
    .then (dataJson => this.setState({data: dataJson, isFetch: false}))
  }
  
  render(){
    if (this.state.isFetch) {
      return 'Cargando...'
    }

    const title = this.state.data[0].title
    const timeDaily = this.state.data[0].timeframes.daily
    const timeWeek = this.state.data[0].timeframes.weekly
    const timeMonthly = this.state.data[0].timeframes.monthly



    return(
      <div className="workPerfil">
        <div className="workImg"></div>
        <div className="workDetalles">
            <div className="workTime">
              <p className="title">{title}</p>
              <h1 className="horas">{timeDaily.current}hrs</h1>
            </div>
            <div className="workTimeWeek">
              <p className="moreoption">. . .</p>
              <p className="weekTime">Last Day-{timeDaily.previous}hrs</p>
            </div>
          </div>
      </div>
    )
  }
};

export {WorkPerfil};