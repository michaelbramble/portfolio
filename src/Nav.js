import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Propic from './images/propic.jpg';
import './styles/nav.css';

export default class Nav extends Component {
  render(){
    return (
      <nav role="navigation" className="nav">
        <Link to="/" className="navLink" id="picLink"><img src={Propic} alt="Michael Bramble" id="pic" /></Link>
        <section className="links">
          <Link to="/about" className="navLink">about</Link>
          {' / '}
          <Link to="/projects" className="navLink">projects</Link>
          {' / '}
          <Link to="/contact" className="navLink">contact</Link>
        </section>
      </nav>
    )
  }
}