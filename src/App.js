import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button, Grid, Col, Nav, NavItem, Panel} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      user:{}
      };
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newObject = this.newObject.bind(this);
  }

  componentWillMount() {
    fetch("http://10.0.60.1/app/app.php/get")
    .then((response)=>response.json())
    .then((res)=>{
    this.setState({items:res})
    })
  }

    add(i){
          console.log('Usuario: ', i  );
      }

    handleChange (e){
      const {name, value} = e.target;
       let user = this.state.user;
       user[name] = value;
       return this.setState({user});
     }

    newObject(e) {
      e.preventDefault();
      this.Dbtn = true;
      fetch("http://10.0.60.1/app/app.php/uno", {
        method: 'POST',
        body:JSON.stringify({nombre:this.state.user.nombre, paterno:this.state.user.paterno, materno:this.state.user.materno})
      }).then((response) => {
        setTimeout(function () {
          location.reload();
        }, 1000);
      });
    }

  render() {
    return (
      <Grid>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/">Usuarios</NavItem>
        <NavItem eventKey="2"  href="/">Productos</NavItem>
      </Nav>
        <br/>
        <Col md={6}>
          <BootstrapTable data={this.state.items} pagination options={ {noDataText: 'No hay registros que mostrar :( '}}>
                <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='nombre'>Nombre</TableHeaderColumn>
                <TableHeaderColumn dataField='paterno'>Apellido Paterno</TableHeaderColumn>
                <TableHeaderColumn dataField='materno'>Apellido Materno</TableHeaderColumn>
          </BootstrapTable>
        </Col>
        <Col md={5}>
          <hr/>
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
          <Button bsStyle="info" bsSize="small" block onClick={this.newObject} disabled={this.Dbtn}>Registrar</Button>

          <br/><br/>
            <Panel header={"Alerta"} bsStyle="success">
              Registro Realizado Correctamente :D
            </Panel>
        </Col>

      </Grid>
    );
  }
}



export default App;
