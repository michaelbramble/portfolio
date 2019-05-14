import React, {Component} from 'react';

export default class About extends Component {
  render(){
    return (
      <section className="aboutMe">
        <p>
          When I’m not programming, I’m an avid video game player. I am a partnered broadcaster on Twitch, and used to hold the third fastest 100% completion time in Super Mario World. Speedrunning SMW has been my main hobby for about five years now, but I am also in the process of learning how to play piano and write small, non web-based programs to expand my knowledge of coding.
        </p>
        <p>
          I am looking for work! Check me out on any of these platforms:
        </p>
        <div className="contactLinks">
          <a href="https://github.com/michaelbramble">GitHub</a>
          <a href="https://linkedin.com/in/mwbramble">LinkedIn</a>
          <a href="mailto:mwbramble@gmail.com">Email</a>
        </div>
      </section>
    )
  }
}
