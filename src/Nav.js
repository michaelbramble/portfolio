import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const bgColor = '#312F68';

export default class Nav extends Component {
  render(){
    return (
      <nav role="navigation" className="nav">
        <NavLink to="/about" className="navLink" activeStyle={{backgroundColor: {bgColor}}}>about</NavLink>
        <NavLink to="/projects" className="navLink" activeStyle={{backgroundColor: {bgColor}}}>projects</NavLink>
        <NavLink to="/contact" className="navLink" activeStyle={{backgroundColor: {bgColor}}}>contact</NavLink>
      </nav>
    )
  }
}