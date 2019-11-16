import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MunchstatsScreen from './images/munchstats.png';

export default class Munchstats extends Component {
  render(){
    return (
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
          {" | "}
          <a href="https://github.com/thinkful-ei-armadillo/munchstats-api">
            Server Repo
          </a>
          {" | "}
          <a href="https://munchstats.now.sh">Live App</a>
        </div>
        <br />
        <Link to="/projects" className="back">back to projects page</Link>
      </main>
    )
  }
}