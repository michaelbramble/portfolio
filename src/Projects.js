import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Munchstats from './images/munchstats.png';
import Petful from './images/petful.jpg';
import QuizApp from './images/quizapp.jpg';

export default class Projects extends Component {
  render(){
    return (
      <main className="projects">
        <h1>Featured Projects</h1>
        <ul className="projList">
          <li className="proj">
            <h3>Munch Stats</h3>
            <img src={Munchstats} className="projPrev" alt="Munch Stats" /><p>
              <Link to="/projects/munchstats">info</Link>
              {" / "}
              <a href="https://github.com/thinkful-ei-armadillo/munchstats-client">
                client repo
              </a>
              {" / "}
              <a href="https://github.com/thinkful-ei-armadillo/munchstats-api">
                server repo
              </a>
              {" / "}
              <a href="https://munchstats.now.sh">live app</a>
            </p>
          </li>
          <li className="proj">
            <h3>Petful</h3>
            <img src={Petful} className="projPrev" alt="Petful" />
            <p>
              <Link to="/projects/petful">info</Link>
              {" / "}
              <a href="https://github.com/michaelbramble/petful-client-Michael-Jonathan">
                client repo
              </a>
              {" / "}
              <a href="https://github.com/michaelbramble/petful-server-Michael-Jonathan">
                server repo
              </a>
            </p>
          </li>
          <li className="proj">
            <h3>Quiz App</h3>
            <img src={QuizApp} className="projPrev" alt="Quiz App" />
            <p>
              <Link to="/projects/quizapp">info</Link>
              {" / "}
              <a href="https://github.com/thinkful-ei-armadillo/irem-michael">
                client repo
              </a>
              {" / "}
              <a href="https://thinkful-ei-armadillo.github.io/irem-michael/">
                live app
              </a>
            </p>
          </li>
        </ul>
      </main>
    )
  }
}

// Old HTML

// <div className="screenshots">
//   <Link to="/projects/munchstats">
//     <img src={Munchstats} className="projImage" alt="Munch Stats" />
//   </Link>
//   <Link to="/projects/petful">
//     <img src={Petful} className="projImage" alt="Petful" />
//   </Link>
//   <Link to="/projects/quizapp">
//     <img src={QuizApp} className="projImage" alt="Quiz App" />
//   </Link>
// </div>