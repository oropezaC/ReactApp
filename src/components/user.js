import React, { Component } from 'react';
import {Grid,Col,Button,Panel} from 'react-bootstrap';

import './css/st.css'

class Reg extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{}
    };
    this.handleChange = this.handleChange.bind(this);
    this.newObject = this.newObject.bind(this);

  }

  handleChange (e){
    const {name, value} = e.target;
    let user = this.state.user;
    user[name] = value;
    return this.setState({user});
  }

  newObject(e) {
    this.setState({
      isCounterHidden: ! this.state.isCounterHidden,
      isBtnHidden: ! this.state.isBtnHidden
    });
    e.preventDefault();
    this.Dbtn = true;
    fetch("http://10.0.60.1/app/app.php/uno", {
      method: 'POST',
      body:JSON.stringify({nombre:this.state.user.nombre, paterno:this.state.user.paterno, materno:this.state.user.materno})
    }).then((response) => {
        console.log(response);
       setTimeout(function () {
       location.reload();
      }, 1000);
    });
  }

  render() {
    return (
      <div className="formulario">
      <Grid>
        <Col md={4}>
          <h1>Registro</h1>
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" className="form-control" name="nombre" value={this.state.user.nombre || ''} onChange={this.handleChange} ></input>
          </div>
          <div className="form-group">
            <label>Paterno</label>
            <input type="text" className="form-control" name="paterno" value={this.state.user.paterno || ''} onChange={this.handleChange}  ></input>
          </div>
          <div className="form-group">
            <label>Materno</label>
            <input type="text" className="form-control" name="materno" value={this.state.user.materno || ''} onChange={this.handleChange}  ></input>
          </div>
          {this.state.isCounterHidden ? null :<Button bsStyle="info" bsSize="small" block onClick={this.newObject}>Registrar</Button>}
          <br/><br/>
          {!this.state.isBtnHidden ? null :
            <Panel header={"Alerta"} bsStyle="success">
              Registro Realizado Correctamente :D
            </Panel>
          }
        </Col>
      </Grid>
      </div>
    );
  }
}

export default Reg;
