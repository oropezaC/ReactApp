import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      items:[]
    };
  }

  componentWillMount() {
    fetch("http://localhost/app/app.php/get")
    .then((response) =>  response.json())
    .then((res) => {
      this.setState({
        items:res
      })
    })
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <br/><br/>
          <div className="col-md-6">
          <table className="table table-condensed">
            <thead>
              <tr>
              <th className="thh">Nombre</th>
              <th className="thh">Paterno</th>
              <th className="thh">Materno</th>
              <th className="thh">---</th>
              <th className="thh">---</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((person, i)=> <TableRow key={i} items={person}/>)}
            </tbody>
          </table>
        </div>
      </div>

      </div>
    );

  }
}

class TableRow extends Component {
  removePeople(nombre) {
    let items = this.props.item;
    console.log(items);
  }


   render() {
      return (
         <tr>
            <td className="thh">{this.props.items.nombre}</td>
            <td className="thh">{this.props.items.paterno}</td>
            <td className="thh">{this.props.items.materno}</td>
            <td className="thh"><input type="button" className="btn btn-warning btn-xs" value="editar" onClick={this.removePeople.bind(this.props.items.nombre)}/></td>
            <td className="thh"><input type="button" className="btn btn-danger btn-xs" value="borrar"/></td>
           </tr>
      );
   }
}

  export default App;
