import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import GitHubLogo from "./images/github-logo.png";
// import LinkedInLogo from "./images/linkedin-logo.png";
// import EmailIcon from "./images/email-icon.jpg";
import './styles/footer.css';

export default class Footer extends Component {
  render(){
    return (
      <footer className="footer">
        <p>
          <Link to="/contact" className="footerLink">Contact Me</Link>
          <br />
          &copy; Michael Bramble 2019
        </p>
        {/* <ul className="logos">
          <li>
            <a href="https://github.com/michaelbramble">
              <img src={GitHubLogo} alt="GitHub Logo" className="contactPic" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/mwbramble">
              <img src={LinkedInLogo} alt="LinkedIn Logo" className="contactPic" />
            </a>
          </li>
          <li>
            <a href="mailto:mwbramble@gmail.com">
              <img src={EmailIcon} alt="Email Icon" className="contactPic" />
            </a>
          </li>
        </ul> */}
      </footer>
    )
  }
}