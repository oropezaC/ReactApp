import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[]
    };
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newObject = this.newObject.bind(this);
  }

  componentWillMount() {
    fetch("http://localhost/app/app.php/get")
    .then((response)=>response.json())
    .then((res)=>{
    this.setState({items:res})
    })

  }

    add(i){
          console.log('Usuario: ', i  );
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      newObject(event) {
        // console.log(this.state.value);
        this.setState({
          items: this.state.items.concat(this.state.value)
        });
        event.preventDefault();
      }

  render() {
    console.log(this.state.items);
    let Users = this.state.items.map((d) =>
                              <tr key={d.id}>
                                <td>{d.nombre}</td>
                                <td>{d.nombre}</td>
                                <td>{d.materno}</td>
                                <td><input type="button" value="Ver" className="btn btn-info btn-xs" onClick={this.add.bind(this, d)}></input></td>
                              </tr>);
    return (
      <div className="container-fluid">
        <br/>
        <div className="row">
        <div className="col-md-6">
          <table className="table table-condensed">
            <thead>
              <tr>
                <th className="h">Nombre</th>
                <th className="h">Paterno</th>
                <th className="h">Materno</th>
                <th className="h">---</th>
              </tr>
            </thead>
            <tbody className="thh">
              {Users}
            </tbody>
          </table>
        </div>
        <div className="col-md-5">
          <hr/>
            <div className="form-group">
            <label>Nombre</label>
            <input type="text" className="form-control" value={this.state.nombre} onChange={this.handleChange} ></input>
          </div>
          <div className="form-group">
            <label>Paterno</label>
            <input type="text" className="form-control" value={this.state.paterno} ></input>
          </div>
          <div className="form-group">
            <label>Materno</label>
            <input type="text" className="form-control" value={this.state.materno} ></input>
          </div>
          <button className="btn btn-success btn-lg-block" onClick={this.newObject}>Guardar</button>
        </div>
        </div>
      </div>
    );
  }
}






export default App;
