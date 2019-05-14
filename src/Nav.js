import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Propic from './images/propic.jpg';

export default class Nav extends Component {
  render(){
    return (
      <nav role="navigation" className="nav">
        <img src={Propic} alt="Michael Bramble"></img>
        <Link to="/" className="homeLink">Michael Bramble</Link>
        <Link to="/projects" className="projectsLink">Projects</Link>
        <Link to="/about" className="aboutLink">About Me</Link>
      </nav>
    )
  }
}