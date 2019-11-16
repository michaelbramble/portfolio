import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

const bgActive = '#312F68';

export default class Nav extends Component {
  render(){
    return (
      <nav role="navigation" className="nav">
        <Link to="/" className="navLink">home</Link>
        <NavLink to="/about" className="navLink" activeStyle={{backgroundColor: {bgActive}}}>about</NavLink>
        <NavLink to="/projects" className="navLink" activeStyle={{backgroundColor: {bgActive}}}>projects</NavLink>
        <NavLink to="/contact" className="navLink" activeStyle={{backgroundColor: {bgActive}}}>contact</NavLink>
        <p>&copy; Michael Bramble 2019</p>
      </nav>
    )
  }
}