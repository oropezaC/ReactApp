import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Reg from '././usuario_list/user';
import Navi from '././header/head_nav';
import './index.css';

ReactDOM.render(<Navi />, document.getElementById('nv'));
ReactDOM.render(<App />, document.getElementById('form'));
ReactDOM.render(<Reg />, document.getElementById('new'));
