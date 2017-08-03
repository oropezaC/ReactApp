class App extends React.Component {
   constructor() {
      super();

      this.state = {
         data:
         [
            {
               "id":1,
               "name":"Juan",
               "ap":"Perez",
               "am":"Perez",
               "age":"20"
            },

            {
              "id":2,
              "name":"Luis",
              "ap":"Martinez",
              "am":"Rosas",
              "age":"23"
            },

            {
              "id":3,
              "name":"Roberto",
              "ap":"Perez",
              "am":"Marquez",
              "age":"26"
            }
         ]
      }
   }

   render() {
      return (
         <div>
            <Header/>
            <table className="tbl">
              <thead>
                <th className="tbl">ID</th>
                <th className="tbl">NOMBRE</th>
                <th className="tbl">APELLIDO PATERNO</th>
                <th className="tbl">APELLIDO MATERNO</th>
                <th className="tbl">EDAD</th>
              </thead>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

// <td>
//   {this.state.items.map(function(ea){
//       return <div>{ea.nombre}</div>
//     })}
// </td>
// <td>
//   {this.state.items.map(function(ea){
//       return <div>{ea.paterno}</div>
//     })}
// </td>
// <td>
//   {this.state.items.map(function(ea){
//       return <div>{ea.materno}</div>
//     })}
// </td>
// 
// class Header extends React.Component {
//    render() {
//       return (
//          <div className="h">
//             <h1>User</h1>
//          </div>
//       );
//    }
// }
//
// class TableRow extends React.Component {
//    render() {
//       return (
//          <tr>
//             <td className="tbl">{this.props.data.id}:</td>
//             <td className="tbl">{this.props.data.name}</td>
//             <td className="tbl">{this.props.data.ap}</td>
//             <td className="tbl">{this.props.data.am}</td>
//             <td className="tbl">{this.props.data.age}</td>
//          </tr>
//       );
//    }
// }











//
// class TableRow extends Component {
//   removePeople(nombre) {
//     let items = this.props.item;
//     console.log(items);
//   }
//
//
//    render() {
//       return (
//          <tr>
//             <td className="thh">{this.props.items.nombre}</td>
//             <td className="thh">{this.props.items.paterno}</td>
//             <td className="thh">{this.props.items.materno}</td>
//             <td className="thh"><input type="button" className="btn btn-warning btn-xs" value="editar" onClick={this.removePeople.bind(this.props.items.nombre)}/></td>
//             <td className="thh"><input type="button" className="btn btn-danger btn-xs" value="borrar"/></td>
//            </tr>
//       );
//    }
// }
