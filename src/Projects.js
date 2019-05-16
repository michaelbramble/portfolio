import React, {Component} from 'react';
import Munchstats from './images/munchstats.png';
import Petful from './images/petful.jpg';
import Quiz from './images/quizapp.jpg';
import './styles/projects.css';

export default class Projects extends Component {
  render(){
    return(
      <section className="projects">
        <div className="project-container">
          <h2>Munch Stats</h2>
          <img src={Munchstats} alt="Munchstats" id="projImage" />
          <p>
            Munch Stats is a meal tracking app. What makes Munch Stats different is our approach to building meals within the app. 
            Using the Edamam API, you can build and track your meals ingredient by ingredient and save each meal for multiple 
            trackings. You can also set daily goals for calories, carbohydrates, fat, and/or protein and track how your daily 
            consumption compares to your goals.
          </p>
          <ul className="techStack">
            <li>Client: HTML, CSS, JavaScript, React, React Router, JWT, Jest, Enzyme, Chart.js, deployed with Zeit/Now.</li>
            <li>Server: Node.js, Express, PostgreSQL, Chai, Mocha, Supertest, TravisCI, deployed with Heroku.</li>
          </ul>
          <div className="projLinks">
            {'Links: '}
            <a href="https://github.com/thinkful-ei-armadillo/munchstats-client">Client Repo</a>
            {' | '}
            <a href="https://github.com/thinkful-ei-armadillo/munchstats-api">Server Repo</a>
            {' | '}
            <a href="https://munchstats.now.sh">Live App</a>
          </div>
        </div>
        <hr />
        <div className="project-container">
          <h2>Petful</h2>
          <img src={Petful} alt="Petful" id="projImage" />
          <p>
            Petful is a mock site for an animal shelter. The adoption process works on a "FIFO" system. Potential adopters are also 
            put into a queue so they can only adopt when it's their turn. This project was mainly meant as an exercise on data 
            structures and algorithms, and was done in one day.
          </p>
          <ul className="techStack">
            <li>Client: HTML, CSS, JavaScript, React, React Router</li>
            <li>Server: Node.js, Express, Cors, Nodemon</li>
          </ul>
          <div className="projLinks">
            {'Links: '}
            <a href="https://github.com/michaelbramble/petful-client-Michael-Jonathan">Client Repo</a>
            {' | '}
            <a href="https://github.com/michaelbramble/petful-server-Michael-Jonathan">Server Repo</a>
          </div>
        </div>
        <hr />
        <div className="project-container">
          <h2>Quiz App</h2>
          <img src={Quiz} alt="Quiz App" id="projImage" />
          <p>
            This is a simple seven-question quiz that renders each new question as well as a results screen using jQuery.
          </p>
          <ul className="techStack">
            <li>Client: HTML, CSS, jQuery</li>
          </ul>
          <div className="projLinks">
            {'Links: '}
            <a href="">Client Repo</a>
            {' | '}
            <a href="https://thinkful-ei-armadillo.github.io/irem-michael/">Live App</a>
          </div>
        </div>
        <hr />
        <p>
          In addition to all of these, I built this portfolio using React!
        </p>
      </section>
    )
  }
}

// Project Template
{/* 
<div className="project-container">
  <h2></h2>
  <img src={} alt="" id="projImage" />
  <p>
  </p>
  <ul className="techStack">
    <li>Client:</li>
    <li>Server:</li>
  </ul>
  <div className="projLinks">
    {'Links: '}
    <a href="">Client Repo</a>
    {' | '}
    <a href="">Server Repo</a>
    {' | '}
    <a href="">Live App</a>
  </div>
</div> 
*/}