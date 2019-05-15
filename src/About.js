import React, {Component} from 'react';
import GitHubLogo from './images/github-logo.png';
import LinkedInLogo from './images/linkedin-logo.png';
import EmailIcon from './images/email-icon.jpg';
import './styles/about.css';

export default class About extends Component {
  render(){
    return (
      <section className="aboutMe">
        <div className="bio">
          <p>
            I am a web developer based in the Detroit Metro area who is a recent graduate of the Enginering Immersion 
            program at Thinkful. Ever since I took my first basic HTML/CSS class in high school, I knew that I
            wanted to be a part of creating the code behind websites. I have a passion for learning all things coding, 
            having taken some Python and Java classes in college in addition to the JavaScript I've learned with Thinkful.
          </p>
          <p>
            When I’m not programming, I’m an avid video game player. I am a partnered broadcaster on Twitch, 
            and used to hold the third fastest 100% completion time in Super Mario World. Speedrunning SMW has 
            been my main hobby for about five years now, but I am also in the process of learning how to play 
            piano and write small, non web-based programs to expand my knowledge of other languages.
          </p>
          <p>
            I am looking for work! Check me out on GitHub and LinkedIn or send me an Email:
          </p>
        </div>
        <div className="contactLinks">
          <a href="https://github.com/michaelbramble"><img src={GitHubLogo} alt="GitHub Logo" id="contactPic" /></a>
          <br />
          <a href="https://linkedin.com/in/mwbramble"><img src={LinkedInLogo} alt="LinkedIn Logo" id="contactPic" /></a>
          <br />
          <a href="mailto:mwbramble@gmail.com"><img src={EmailIcon} alt="Email Icon" id="contactPic" /></a>
        </div>
      </section>
    )
  }
}
