import React, { Component } from "react";
import SmwScreen from "../../images/smw.jpg";

export default class SmwSite extends Component {
  render() {
    return (
      <main className="projContainer">
        <h1>SMW Speedrunning Info</h1>
        <img src={SmwScreen} alt="SMW Speedrunning" className="projImage" />
        <h2>About</h2>
        <p>
          This is a site that will eventually contain all the information there
          is to know about speedrunning Super Mario World. It was built
          completely from scratch using React, but is currently still a large
          work in progress.
        </p>
        <p>Last updated: November 24, 2019</p>
        <h2>Tech Stack</h2>
        <ul className="techStack">
          <li>Client: HTML, CSS, JavaScript, React, React Router.</li>
        </ul>
        <div className="projLinks">
          {"Links: "}
          <a href="https://github.com/michaelbramble/smw-speedrunning-site">
            Client Repo
          </a>
          {/* {" / "}
          <a href="">Live App</a> */}
        </div>
      </main>
    );
  }
}
