import React, { Component } from 'react';
import './App.css';

import Navi from './header/head_nav.js'
import Reg from './components/user.js'
import ReadUser from './components/readUser.js'

import items from './header/d';

class App extends Component {

  render() {
      return (
      <div className="content">
        <Navi title="" items={items}/>
      <ReadUser />
      <Reg />
      </div>
      );
  }
}



export default App;
