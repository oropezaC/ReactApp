import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';


class Navi extends Component {
  
  constructor() {
    super();
    this.state={

    };
  }

  render(){
    return(
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
      <NavItem eventKey="1" href="/">Usuarios</NavItem>
      <NavItem eventKey="2"  href="/">Productos</NavItem>
      </Nav>
    );
  }
}

export default Navi;
