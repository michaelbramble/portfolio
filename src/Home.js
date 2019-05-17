import React, { Component } from "react";
import Munchstats from "./images/munchstats.png";
import Petful from "./images/petful.jpg";
import Quiz from "./images/quizapp.jpg";
import GitHubLogo from "./images/github-logo.png";
import LinkedInLogo from "./images/linkedin-logo.png";
import EmailIcon from "./images/email-icon.jpg";
import "./styles/home.css";

export default class Home extends Component {
  render() {
    return (
      <main>
        <section className="aboutMe">
          <h1>About Me</h1>
          <div className="bio">
            <p>
              I am a web developer based in the Detroit Metro area who is a recent
              graduate of the Enginering Immersion program at Thinkful. Ever since
              I took my first basic HTML/CSS class in high school, I knew that I
              wanted to be a part of creating the code behind websites. I have a
              passion for learning all things coding, having taken some Python and
              Java classes in college in addition to the JavaScript I've learned
              with Thinkful.
            </p>
            <p>
              When I’m not programming, I’m an avid video game player. I am a
              partnered broadcaster on Twitch, and used to hold the third fastest
              100% completion time in Super Mario World. Speedrunning SMW has been
              my main hobby for about five years now, but I am also in the process
              of learning how to play piano and write small, non web-based
              programs to expand my knowledge of other languages.
            </p>
          </div>        
        </section>
        <hr className="divider" />
        <section className="projects">
          <h1>Projects</h1>
          <div className="projContainer1">
            <h3>Munch Stats</h3>
            <img src={Munchstats} alt="Munchstats" className="projImage" />
            <p>
              Munch Stats is a meal tracking app. What makes Munch Stats different
              is our approach to building meals within the app. Using the Edamam
              API, you can build and track your meals ingredient by ingredient and
              save each meal for multiple trackings. You can also set daily goals
              for calories, carbohydrates, fat, and/or protein and track how your
              daily consumption compares to your goals.
            </p>
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
            <hr />
          </div>
          <div className="projContainer2">
            <h3>Petful</h3>
            <img src={Petful} alt="Petful" className="projImage" />
            <p>
              Petful is a mock site for an animal shelter. The adoption process
              works on a "FIFO" system. Potential adopters are also put into a
              queue so they can only adopt when it's their turn. This project was
              mainly meant as an exercise on data structures and algorithms, and
              was done in one day.
            </p>
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
          </div>
          <hr />
          <div className="projContainer3">
            <h3>Quiz App</h3>
            <img src={Quiz} alt="Quiz App" className="projImage" />
            <p>
              This is a simple seven-question quiz that renders each new question
              as well as a results screen using jQuery.
            </p>
            <ul className="techStack">
              <li>Client: HTML, CSS, jQuery.</li>
            </ul>
            <div className="projLinks">
              {"Links: "}
              <a href="https://github.com/thinkful-ei-armadillo/irem-michael">Client Repo</a>
              {" | "}
              <a href="https://thinkful-ei-armadillo.github.io/irem-michael/">
                Live App
              </a>
            </div>
          </div>
          {
          // Project Template
          /* 
          <div className="projContainer_">
            <h2></h2>
            <img src={} alt="" id="projImage" />
            <p>
            </p>
            <ul className="techStack">
              <li>Client:</li>
              <li>Server:</li>
            </ul>
            <div className="projLinks">
              {'Links: '}
              <a href="">Client Repo</a>
              {' | '}
              <a href="">Server Repo</a>
              {' | '}
              <a href="">Live App</a>
            </div>
          </div> 
          */
          }
        </section>
        <hr className="divider" />
        <section className="contact">
          <div className="contactP">
            <h1>Contact Me</h1>
            <p>
              I am looking for work! Check me out on GitHub and LinkedIn or send
              me an Email:
            </p>
          </div>
          <div className="contactLinks">
            <a href="https://github.com/michaelbramble">
              <img src={GitHubLogo} alt="GitHub Logo" className="contactPic" />
            </a>
            <br />
            <a href="https://linkedin.com/in/mwbramble">
              <img src={LinkedInLogo} alt="LinkedIn Logo" className="contactPic" />
            </a>
            <br />
            <a href="mailto:mwbramble@gmail.com">
              <img src={EmailIcon} alt="Email Icon" className="contactPic" />
            </a>
          </div>
        </section>
      </main>
    );
  }
}