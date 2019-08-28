import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Munchstats from './images/munchstats.png';
import Petful from './images/petful.jpg';
import QuizApp from './images/quizapp.jpg';
import './styles/projects.css';

export default class Projects extends Component {
  render(){
    return (
      <main className="projects">
        <h1>Featured Projects</h1>
        <div className="screenshots">
          <Link to="/projects/munchstats">
            <img src={Munchstats} className="projImage" alt="Munch Stats" />
          </Link>
          <Link to="/projects/petful">
            <img src={Petful} className="projImage" alt="Petful" />
          </Link>
          <Link to="/projects/quizapp">
            <img src={QuizApp} className="projImage" alt="Quiz App" />
          </Link>
        </div>
      </main>
    )
  }
}