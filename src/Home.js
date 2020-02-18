import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Propic from './images/propic.jpg';

export default class Home extends Component {
  render() {
    return (
      <main className="main">
        <h1>Home</h1>
        <img src={Propic} alt="Michael Bramble" id="pic" />
        <p>Welcome to my portfolio site!</p>
        <p>
          This, along with most of my other projects, was built with React. On
          this site you can check out some of these <Link to='/projects'>projects
          </Link>, learn more about me, or figure out how to get in <Link to='/contact'>
          contact</Link> with me.
        </p>
        <p>
          I am a web developer based in the Detroit Metro area who is a recent
          graduate of the Enginering Immersion program at Thinkful. Ever since I
          took my first basic HTML/CSS class in high school, I knew that I
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
          of learning how to play piano and write small, non web-based programs
          to expand my knowledge of other languages.
        </p>
        <div className="projLinks">
          <a href="https://github.com/michaelbramble/portfolio">
            GitHub Repo for This Site
          </a>
        </div>
      </main>
    );
  }
}
