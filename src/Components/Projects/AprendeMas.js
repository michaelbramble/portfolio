import React, {Component} from 'react';
import AprendeMasScreen from '../../images/aprendemas.png';
import {drawCode} from '../../resources/utils.js';

export default class AprendeMas extends Component {
  componentDidMount(){
    drawCode();
  }

  render(){
    return (
      <div className='projPageWrapper'>
        <main className="projContainer">
          <h1>Aprende Más</h1>
          <img src={AprendeMasScreen} alt="Aprende Más" className="projImage" />
          <h2>About</h2>
          <p>
            Practice learning a language with the spaced repetiton revison technique.
          </p>
          <p>Last updated: May 28, 2019</p>
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
            <a href="https://github.com/mwbramble/spaced-rep-michael-michael-client">
              Client Repo
            </a>
            {" / "}
            <a href="https://github.com/mwbramble/spaced-rep-michael-michael-server">
              Server Repo
            </a>
            {" / "}
            <a href="https://aprendemas.mdb1710.now.sh/register">Live App</a>
          </div>
        </main>
        <section className='codeContainer' id='code'>
          <p id='ind0'>{`import React, { Component } from 'react';`}</p>
          <p id='ind0'>{`import { Link } from 'react-router-dom';`}</p>
          <p id='ind0'>{`import TokenService from "../../services/token-service";`}</p>
          <p id='ind0'>{`import config from '../../config';`}</p>
          <br />
          <p id='ind0'>{`class DashboardRoute extends Component {`}</p>
          <p id='ind1'>{`state = {`}</p>
          <p id='ind2'>{`language: {`}</p>
          <p id='ind3'>{`id: null,`}</p>
          <p id='ind3'>{`name: null,`}</p>
          <p id='ind3'>{`user_id: null,`}</p>
          <p id='ind3'>{`head: null,`}</p>
          <p id='ind3'>{`total_score: null`}</p>
          <p id='ind2'>{`},`}</p>
          <p id='ind2'>{`words: []`}</p>
          <p id='ind1'>{`}`}</p>
          <br />
          <p id='ind1'>{`componentDidMount(){`}</p>
          <p id='ind2'>{`this.getLangWords();`}</p>
          <p id='ind1'>{`}`}</p>
          <br />
          <p id='ind1'>{`getLangWords(){`}</p>
          <p id='ind2'>{'fetch(`${config.API_ENDPOINT}/language`, {'}</p>
          <p id='ind3'>{`method: "GET",`}</p>
          <p id='ind3'>{`headers: {`}</p>
          <p id='ind4'>{`"content-type": "application/json",`}</p>
          <p id='ind4'>"Authorization": `Bearer {'${TokenService.getAuthToken()}`'}</p>
          <p id='ind3'>{`}`}</p>
          <p id='ind2'>{`})`}</p>
          <p id='ind2'>{`.then(res => {`}</p>
          <p id='ind3'>{`if(!res.ok){`}</p>
          <p id='ind4'>{`return 'error';`}</p>
          <p id='ind3'>{`}`}</p>
          <p id='ind3'>{`return res.json();`}</p>
          <p id='ind2'>{`})`}</p>
          <p id='ind2'>{`.then(res => {`}</p>
          <p id='ind3'>{`this.setState({`}</p>
          <p id='ind4'>{`language: {`}</p>
          <p id='ind5'>{`id: res.language.id,`}</p>
          <p id='ind5'>{`name: res.language.name,`}</p>
          <p id='ind5'>{`user_id: res.language.user_id,`}</p>
          <p id='ind5'>{`head: res.language.head,`}</p>
          <p id='ind5'>{`total_score: res.language.total_score`}</p>
          <p id='ind4'>{`}`}</p>
          <p id='ind3'>{`})`}</p>
          <p id='ind3'>{`this.setState({words: res.words})`}</p>
          <p id='ind2'>{`})`}</p>
          <p id='ind1'>{`}`}</p>
          <br />
          <p id='ind1'>{`render() {`}</p>
          <p id='ind2'>{`const wordMap = this.state.words.map((word) => {`}</p>
          <p id='ind3'>{`return (`}</p>
          <p id='ind4'>{`<li key={word.id}><h4>{word.original}</h4>`}</p>
          <br />
          <p id='ind5'>{`Right: {word.correct_count}`}</p>
          <p id='ind5'>{`<br />`}</p>
          <p id='ind5'>{`Wrong: {word.incorrect_count}</li>)`}</p>
          <p id='ind2'>{`})`}</p>
          <p id='ind2'>{`return (`}</p>
          <p id='ind3'>{`<section className="dashboard">`}</p>
          <p id='ind4'>{`<h2 id='language'>{this.state.language.name}</h2>`}</p>
          <p id='ind4'>{`<p id='total-score'>Total Correct Answers: {this.state.language.total_score}</p>`}</p>
          <p id='ind4'>{`<h3>Words to Practice:</h3>`}</p>
          <p id='ind4'>{`<ul>`}</p>
          <p id='ind5'>{`{wordMap}`}</p>
          <p id='ind4'>{`</ul>`}</p>
          <p id='ind4'>{`<Link to="/learn">`}</p>
          <p id='ind5'>{`<button>Start Practicing</button>`}</p>
          <p id='ind4'>{`</Link>`}</p>
          <p id='ind3'>{`</section>`}</p>
          <p id='ind2'>{`);`}</p>
          <p id='ind1'>{`}`}</p>
          <p id='ind0'>{`}`}</p>
          <br />
          <p id='ind0'>{`export default DashboardRoute;`}</p>
        </section>
      </div>
    )
  }
}