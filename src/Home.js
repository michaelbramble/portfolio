import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Munchstats from "./images/munchstats.png";
import Petful from "./images/petful.jpg";
import QuizApp from "./images/quizapp.jpg";
import GitHubLogo from "./images/github-logo.png";
import LinkedInLogo from "./images/linkedin-logo.png";
import EmailIcon from "./images/email-icon.jpg";
import "./styles/home.css";

export default class Home extends Component {
  render() {
    return (
      <main>
        <section className="aboutMe">
          <h1>Hi, I'm Michael</h1>
          <div className="bio">
            <p>
              I am a web developer based in the Detroit Metro area who is a recent
              graduate of the Enginering Immersion program at Thinkful. Ever since
              I took my first basic HTML/CSS class in high school, I knew that I
              wanted to be a part of creating the code behind websites.
            </p>
          </div>        
        </section>
        <hr className="divider" />
        <section className="projects">
          <h1>Featured Projects</h1>
          <Link to="/projects/munchstats">
            <img src={Munchstats} className="projImage" alt="Munch Stats" />
          </Link>
          {' '}
          <Link to="/projects/petful">
            <img src={Petful} className="projImage" alt="Petful" />
          </Link>
          {' '}
          <Link to="/projects/munchstats">
            <img src={QuizApp} className="projImage" alt="Quiz App" />
          </Link>
          
          {/*
          // Project Template for Later
          
          <div className="projContainer">
            <Link to="">
              <img />
              <div className="overlay">
                <div className="overlayText">Text</div>
              </div>
            </Link>
          </div>
          
          */}

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