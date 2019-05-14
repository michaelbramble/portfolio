import React, {Component} from 'react';

export default class Projects extends Component {
  render(){
    return(
      <section className="projects">
        <div className="project-container">
          <h2>Munch Stats</h2>
          <ul className="techStack">
            <li>Client: HTML, CSS, JavaScript, React, React Router, JWT, Jest, Enzyme, Chart.js, deployed with Zeit/Now.</li>
            <li>Server: Node.js, Express, PostgreSQL, Chai, Mocha, Supertest, TravisCI, deployed with Heroku.</li>
          </ul>
          <div className="projLinks">
            <a href="https://github.com/thinkful-ei-armadillo/munchstats-client">Client Repo</a>
            <a href="https://github.com/thinkful-ei-armadillo/munchstats-api">Server Repo</a>
            <a href="https://munchstats.now.sh">Live App</a>
          </div>
        </div>
      </section>
    )
  }
}