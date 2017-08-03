import React, { Component } from 'react';

class TableRow extends Component {
   render() {
      return (
         <tr>
            <td className="thh">{this.props.items.nombre}</td>
            <td className="thh">{this.props.items.paterno}</td>
            <td className="thh">{this.props.items.materno}</td>
         </tr>
      );
   }
}

export default UsuarioList;
