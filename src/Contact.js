import React, {Component} from 'react';
import GitHubLogo from "./images/github-logo.png";
import LinkedInLogo from "./images/linkedin-logo.png";
import EmailIcon from "./images/email-icon.jpg";

export default class Contact extends Component {
  render(){
    return (
      <main className="contact">
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
      </main>
    )
  }
}