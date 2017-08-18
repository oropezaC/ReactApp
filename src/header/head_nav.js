import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../components/css/st.css';
import './d.js';

class Navi extends Component {

  constructor() {
    super();
    this.state={

    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render(){
    const { title, items } = this.props;
    return(
      <div className="header">
      <h2>{title}</h2>
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        {
              items && items.map(
                (item, key) => <NavItem key={key}>{item.route}</NavItem>
              )
            }

      </Nav>
    </div>
    );
  }
}

export default Navi;
