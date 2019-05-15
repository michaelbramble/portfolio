import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Propic from './images/propic.jpg';
import './styles/nav.css';

export default class Nav extends Component {
  render(){
    return (
      <nav role="navigation" className="nav">
        <img src={Propic} alt="Michael Bramble" id="pic" />
        <Link to="/" className="navLink" id="homeLink">Michael Bramble</Link>
        <Link to="/projects" className="navLink" id="projectsLink">Projects</Link>
      </nav>
    )
  }
}