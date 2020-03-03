import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Munchstats from '../../images/munchstats.png';
import Smw from '../../images/smw.jpg';
import Avg from '../../images/avgruncalc.png';
import Pass from '../../images/passgen.png';
import Petful from '../../images/petful.jpg';
import AprendeMas from '../../images/aprendemas.png';
import QuizApp from '../../images/quizapp.jpg';
import './projects.css';

export default class Projects extends Component {
  render(){
    return (
      <main className="projects">
        <h1>Featured Projects</h1>
        <ul className="projList">
          <li className="proj">
            <h2>Munch Stats</h2>
            <Link to="/projects/munch_stats">
              <img src={Munchstats} className="projPrev" alt="Munch Stats" />
            </Link>
            <p>
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
            <Link to="/projects/smw_speedrunning_info">
              <img src={Smw} className="projPrev" alt="SMW Speedrunning" />
            </Link>
            <p>
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
            <h2>Average Run Calculator</h2>
            <Link to="/projects/average_run_calculator">
              <img src={Avg} className="projPrev" alt="Average Run Calculator" />
            </Link>
            <p>
              <Link to="/projects/average_run_calculator">info</Link>
              {" / "}
              <a href="https://github.com/michaelbramble/average-run-calc">
                client repo
              </a>
              {" / "}
              <a href="https://michaelbramble.github.io/average-run-calc/">
                live app
              </a>
            </p>
          </li>
          <li className="proj">
            <h2>Password Generator</h2>
            <Link to="/projects/password_generator">
              <img src={Pass} className="projPrev" alt="Password Generator" />
            </Link>
            <p>
              <Link to="/projects/password_generator">info</Link>
              {" / "}
              <a href="https://github.com/michaelbramble/password-generator">
                client repo
              </a>
              {" / "}
              <a href="https://michaelbramble.github.io/password-generator/">
                live app
              </a>
            </p>
          </li>
          <li className="proj">
            <h2>Petful</h2>
            <Link to="/projects/petful">
              <img src={Petful} className="projPrev" alt="Petful" />
            </Link>
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
            <Link to="/projects/aprende_mas">
              <img src={AprendeMas} className="projPrev" alt="Aprende Más" />
            </Link>
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
            <Link to="/projects/quiz_app">
              <img src={QuizApp} className="projPrev" alt="Quiz App" />
            </Link>
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