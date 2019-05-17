import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Propic from './images/propic.jpg';
import './styles/nav.css';

export default class Nav extends Component {
  render(){
    return (
      <nav role="navigation" className="nav">
        <Link to="/" className="navLink" id="picLink"><img src={Propic} alt="Michael Bramble" id="pic" /></Link>
        <a href="https://github.com/michaelbramble" className="navLink" id="githubLink"> GitHub</a>
        <a href="https://linkedin.com/in/mwbramble" className="navLink" id="linkedinLink"> LinkedIn</a>
      </nav>
    )
  }
}