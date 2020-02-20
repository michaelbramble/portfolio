import React, {Component} from 'react';
import MunchstatsScreen from '../../images/munchstats.png';

export default class Munchstats extends Component {
  componentDidMount(){
    let c = document.getElementById('code').childNodes;
    
    c.forEach(this.delayLoop(this.addClass, 50));
  }

  delayLoop = (fn, delay) => {
    return (x, i) => {
      setTimeout(() => {
        fn(x);
      }, i * delay);
    };
  };

  addClass(e){
    e.classList.add('typed');
  }
  render(){
    return (
      <div className='projPageWrapper'>
      <main className="projContainer">
        <h1>Munch Stats</h1>
        <img src={MunchstatsScreen} alt="Munchstats" className="projImage" />
        <h2>About</h2>
        <p>
          Munch Stats is a meal tracking app. What makes Munch Stats different
          is our approach to building meals within the app. Using the Edamam
          API, you can build and track your meals ingredient by ingredient and
          save each meal for multiple trackings. You can also set daily goals
          for calories, carbohydrates, fat, and/or protein and track how your
          daily consumption compares to your goals.
        </p>
        <p>
          After logging in, you are taken to your dashboard. If you click on the
          button to create, view or edit meals, you are taken to the page listing
          your meals where you can create a new meal or edit one of your current
          meals. Choosing either action takes you to the "Meals Detail" page where
          you can look over the nutritional information as well as add or drop
          ingredients from your meal. To add an ingredient, click on the "add
          ingredient" link and simply search for an ingredient. Select the food
          item from the search results. Our app will automatically add the
          ingredient's nutritional information to the meal's total. Once satisfied
          with your meal, you can hit the back button and your meal is saved!
        </p>
        <p>Last updated: May 15, 2019</p>
        <h2>Tech Stack</h2>
        <ul className="techStack">
          <li>
            Client: HTML, CSS, JavaScript, React, React Router, JWT, Jest,
            Enzyme, Chart.js, deployed with Zeit/Now.
          </li>
          <li>
            Server: Node.js, Express, PostgreSQL, Chai, Mocha, Supertest,
            TravisCI, deployed with Heroku.
          </li>
        </ul>
        <div className="projLinks">
          {"Links: "}
          <a href="https://github.com/thinkful-ei-armadillo/munchstats-client">
            Client Repo
          </a>
          {" / "}
          <a href="https://github.com/thinkful-ei-armadillo/munchstats-api">
            Server Repo
          </a>
          {" / "}
          <a href="https://munchstats.now.sh">Live App</a>
        </div>
      </main>
      <section className='codeContainer' id='code'>
        <p id='ind0'>import 'unfetch/polyfill';</p>
        <p id='ind0'>import React from 'react';</p>
        <p id='ind0'>import ReactDOM from 'react-dom';</p>
        <p id='ind0'>{`import { BrowserRouter } from 'react-router-dom';`}</p>
        <p id='ind0'>{`import { UserProvider } from './contexts/UserContext';`}</p>
        <p id='ind0'>import App from './components/App/App';</p>
        <p id='ind0'>import './setup-icons';</p>
        <p id='ind0'>import './index.css';</p>
        <p id='ind0'>import * as serviceWorker from './serviceWorker';</p>
        <br />
        <p id='ind0'>ReactDOM.render(</p>
        <p id='ind1'>{'<BrowserRouter>'}</p>
        <p id='ind2'>{'<UserProvider>'}</p>
        <p id='ind2'>{'<App />'}</p>
        <p id='ind2'>{'</UserProvider>'}</p>
        <p id='ind1'>{'</BrowserRouter>,'}</p>
        <p id='ind1'>document.getElementById('root')</p>
        <p id='ind0'>);</p>
        <br />
        <p id='ind0'>serviceWorker.unregister();</p>
        <br />
        <br />
        <br />
        <p id='ind0'>Basically every JavaScript file in this project is too huge to preview here! :)</p>
      </section>
      </div>
    )
  }
}