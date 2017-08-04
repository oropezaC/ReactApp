import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Grid, Col} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      user:{}
    };
    this.add = this.add.bind(this);
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

  render() {
    return (
      <Grid>
        <br/>
        <Col md={6}>
          <BootstrapTable data={this.state.items} pagination options={ {noDataText: 'No hay registros que mostrar :( '}}>
            <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='nombre'>Nombre</TableHeaderColumn>
            <TableHeaderColumn dataField='paterno'>Apellido Paterno</TableHeaderColumn>
            <TableHeaderColumn dataField='materno'>Apellido Materno</TableHeaderColumn>
          </BootstrapTable>
        </Col>
      </Grid>
    );
  }
}



export default App;
