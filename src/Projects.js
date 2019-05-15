import React, {Component} from 'react';
import Munchstats from './images/munchstats.png';
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
      </section>
    )
  }
}