import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Munchstats from './images/munchstats.png';
import Smw from './images/smw.jpg';
import Petful from './images/petful.jpg';
import AprendeMas from './images/aprendemas.png';
import QuizApp from './images/quizapp.jpg';

export default class Projects extends Component {
  render(){
    return (
      <main className="projects">
        <h1>Featured Projects</h1>
        <ul className="projList">
          <li className="proj">
            <h2>Munch Stats</h2>
            <img src={Munchstats} className="projPrev" alt="Munch Stats" /><p>
              <Link to="/projects/munch_stats">info</Link>
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
            <h2>SMW Speedrunning Info</h2>
            <img src={Smw} className="projPrev" alt="SMW Speedrunning" /><p>
              <Link to="/projects/smw_speedrunning_info">info</Link>
              {" / "}
              <a href="https://github.com/michaelbramble/smw-speedrunning-site">
                client repo
              </a>
              {/* {" / "}
              <a href="">live app</a> */}
            </p>
          </li>
          <li className="proj">
            <h2>Petful</h2>
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
            <h2>Aprende Más</h2>
            <img src={AprendeMas} className="projPrev" alt="Aprende Más" />
            <p>
              <Link to="/projects/aprende_mas">info</Link>
              {" / "}
              <a href="https://github.com/thinkful-ei-armadillo/spaced-rep-michael-michael-client">
                client repo
              </a>
              {" / "}
              <a href="https://github.com/thinkful-ei-armadillo/spaced-rep-michael-michael-server">
                server repo
              </a>
              {" / "}
              <a href="https://aprendemas.mdb1710.now.sh/register">
                live app
              </a>
            </p>
          </li>
          <li className="proj">
            <h2>Quiz App</h2>
            <img src={QuizApp} className="projPrev" alt="Quiz App" />
            <p>
              <Link to="/projects/quiz_app">info</Link>
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