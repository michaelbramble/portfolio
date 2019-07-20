import React, {Component} from 'react';
import PetfulScreen from './images/petful.jpg';

export default class Petful extends Component {
  render(){
    return (
      <main className="projContainer">
        <h1>Petful</h1>
        <img src={PetfulScreen} alt="Petful" className="projImage" />
        <h2>About</h2>
        <p>
          Petful is a mock site for an animal shelter. The adoption process
          works on a "FIFO" system. Potential adopters are also put into a
          queue so they can only adopt when it's their turn. This project was
          mainly meant as an exercise on data structures and algorithms, and
          was done in one day.
        </p>
        <h2>Tech Stack</h2>
        <ul className="techStack">
          <li>Client: HTML, CSS, JavaScript, React, React Router.</li>
          <li>Server: Node.js, Express, Cors, Nodemon.</li>
        </ul>
        <div className="projLinks">
          {"Links: "}
          <a href="https://github.com/michaelbramble/petful-client-Michael-Jonathan">
            Client Repo
          </a>
          {" | "}
          <a href="https://github.com/michaelbramble/petful-server-Michael-Jonathan">
            Server Repo
          </a>
        </div>
      </main>
    )
  }
}