import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import QuizScreen from './images/quizapp.jpg';

export default class Quiz extends Component {
  render(){
    return (
      <main className="projContainer3">
        <h1>Quiz App</h1>
        <img src={QuizScreen} alt="Quiz App" className="projImage" />
        <h2>About</h2>
        <p>
          This is a simple seven-question quiz that renders each new question
          as well as a results screen using jQuery.
        </p>
        <h2>Tech Stack</h2>
        <ul className="techStack">
          <li>Client: HTML, CSS, jQuery.</li>
        </ul>
        <div className="projLinks">
          {"Links: "}
          <a href="https://github.com/thinkful-ei-armadillo/irem-michael">Client Repo</a>
          {" | "}
          <a href="https://thinkful-ei-armadillo.github.io/irem-michael/">
          Live App
          </a>
        </div>
        <br />
        <Link to="/projects" className="back">back to projects page</Link>
      </main>
    )
  }
}