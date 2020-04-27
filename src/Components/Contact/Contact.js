import React, { Component } from "react";
import Propic from "../../images/propic.jpg";
import "./contact.css";

export default class Contact extends Component {
  render() {
    // const resumeURL = process.env.RESUME_URL;
    return (
      <main className="contact">
        <div className="contactP">
          <h1>Contact Me</h1>
          <img src={Propic} alt="Michael Bramble" id="pic2" />
          <p>
            I am looking for work! Ideally, I would like to stay in the Detroit
            area.
            <br />
            I am an able web development candidate specializing in front
            end development that is skilled in writing clean, testible code. I
            am proficient in mobile-first responsive design and test-driven
            development. I am experienced with modern tooling and excited to
            pick up any and all additional tools for the job.
          </p>
          <p>
            My skills in front-end development include HTML5, CSS3, JavaScript,
            React, jQuery, Redux, &amp; Enzyme.
          </p>
          <p>
            Check out my code on <a href="https://github.com/mwbramble">GitHub</a>,
            view my <a href="https://linkedin.com/in/mwbramble">LinkedIn</a> profile, or
            send me an <a href="mailto:mwbramble@gmail.com">Email</a>.
          </p>
          {/* <p>
            If you wish, you can also take a look at my <a href={resumeURL} target="_blank">
            resume</a> on Google Docs.
          </p> */}
        </div>
      </main>
    );
  }
}
