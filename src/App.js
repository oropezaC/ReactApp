import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import {Grid, Col,Button} from 'react-bootstrap';
import './App.css';





class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      user:{},
      isShowingModal: false,
    };
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.buttonFormatter = this.buttonFormatter.bind(this);
    this.buttonUpdate = this.buttonUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateObject = this.updateObject.bind(this);
    this.handleClick = () => this.setState({isShowingModal: true})
    this.handleClose = () => this.setState({isShowingModal: false})
  }
  componentWillMount() {
    fetch("http://10.0.60.1/app/app.php/get")
    .then((response)=>response.json())
    .then((res)=>{
      this.setState({items:res})
    })
  }



  buttonFormatter(cell, row,enumObject, rowIndex){
    return(
      <button className="btn btn-danger btn-xs bt" style={ { color: 'white' } } onClick={() =>this.remove(cell, row, enumObject, rowIndex)}>
      Delete it!!!
      </button>
      );
  }
  remove(cell, row, enumObject, rowIndex){
    fetch( "http://10.0.60.1/app/app.php/remove",{
      method:'POST',
      body : JSON.stringify({id:row.id, paterno:row.paterno})
    }).then((response) => {
     setTimeout(function () {
       location.reload();
     }, 1000);
   });
  }

  buttonUpdate(cell, row,enumObject, rowIndex){
    return(
      <button className="btn btn-info btn-xs bt" style={ { color: 'white'} } onClick={() => this.update(cell, row, enumObject, rowIndex)}>
      Update it!!!
      </button>

      );
  }

  update(cell, row, enumObject, rowIndex){
    console.log(row);
    this.setState({
      user:{id:row.id,nombre:row.nombre,paterno:row.paterno,materno:row.materno},
      isShowingModal: ! this.state.isShowingModal
    });
   }

    handleChange (e){
    const {name, value} = e.target;
    let user = this.state.user;
    user[name] = value;
    return this.setState({user});
  }

  updateObject(e){
    this.setState({
      isShowingModal: ! this.state.isShowingModal
    })
    e.preventDefault();
    console.log(this.state.user)
     fetch("http://10.0.60.1/app/app.php/update", {
      method: 'POST',
      body:JSON.stringify({id:this.state.user.id,nombre:this.state.user.nombre, paterno:this.state.user.paterno, materno:this.state.user.materno})
    }).then((response) => {
        console.log(response);
       setTimeout(function () {
       location.reload();
      }, 1000);
    });
  }

  render() {
    const options = {
      noDataText: 'No hay registros que mostrar :( '
    };

    return (
      <Grid>
      <br/>
      <Col md={6}>
      <BootstrapTable  data={this.state.items} pagination options={ options } bordered={ false } striped hover condensed>
      <TableHeaderColumn className="tbl" dataField='id' isKey></TableHeaderColumn>
      <TableHeaderColumn className="tbl" dataField='nombre'></TableHeaderColumn>
      <TableHeaderColumn className="tbl" dataField='paterno'> </TableHeaderColumn>
      <TableHeaderColumn className="tbl" dataField='materno'> </TableHeaderColumn>
      <TableHeaderColumn className="tbl" dataField="button" dataFormat={this.buttonFormatter}></TableHeaderColumn>
      <TableHeaderColumn className="tbl" dataField="button" dataFormat={this.buttonUpdate}></TableHeaderColumn>
      </BootstrapTable>
      </Col>
      {!this.state.isShowingModal ? null :
        <ModalContainer onClose={this.handleClose}>
        <ModalDialog onClose={this.handleClose}>
        <h1>Update</h1>
        <hr/>
        <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control" name="nombre" value={this.state.user.nombre || ''} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
        <label>Apellido Paterno</label>
        <input type="text" className="form-control" name="paterno" value={this.state.user.paterno || ''} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
        <label>Apellido Materno</label>
        <input type="text" className="form-control" name="materno" value={this.state.user.materno || ''} onChange={this.handleChange}/>
        </div>
        <Button bsStyle="info" bsSize="small" block onClick={this.updateObject}>Actualizar</Button>

        </ModalDialog>
        </ModalContainer>
      }
      </Grid>
      );
  }
}



export default App;
