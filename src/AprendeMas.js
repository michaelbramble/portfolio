import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AprendeMasScreen from './images/aprendemas.png';

export default class AprendeMas extends Component {
  render(){
    return (
      <main className="projContainer">
        <h1>Aprende Más</h1>
        <img src={AprendeMasScreen} alt="Aprende Más" className="projImage" />
        <h2>About</h2>
        <p>
          Practice learning a language with the spaced repetiton revison technique.
        </p>
        <h2>Tech Stack</h2>
        <ul className="techStack">
          <li>
            Client: HTML, CSS, JavaScript, React, React Router, deployed with Zeit/Now.
          </li>
          <li>
            Server: Node.js, Express, PostgreSQL, Chai, Mocha, Supertest, deployed with Heroku.
          </li>
        </ul>
        <div className="projLinks">
          {"Links: "}
          <a href="https://github.com/michaelbramble/spaced-rep-michael-michael-client">
            Client Repo
          </a>
          {" | "}
          <a href="https://github.com/michaelbramble/spaced-rep-michael-michael-server">
            Server Repo
          </a>
          {" | "}
          <a href="https://aprendemas.mdb1710.now.sh/register">Live App</a>
        </div>
        <br />
        <Link to="/projects" className="back">back to projects page</Link>
      </main>
    )
  }
}