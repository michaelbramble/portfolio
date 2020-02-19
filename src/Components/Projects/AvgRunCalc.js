import React, { Component } from "react";
import AvgRunCalcScreen from "../../images/avgruncalc.png";

export default class AvgRunCalc extends Component {
  render(){
    return (
      <main className="projContainer">
        <h1>Average Run Calculator</h1>
        <img src={AvgRunCalcScreen} alt="Average Run Calculator" className="projImage" />
        <h2>About</h2>
        <p>
          This is a simple web app that calculates the average time of any amount of a user's runs.
        </p>
        <p>Last updated: February 17, 2020</p>
        <h2>Tech Stack</h2>
        <ul className="techStack">
          <li>Client: HTML, CSS, JavaScript.</li>
        </ul>
        <div className="projLinks">
          {"Links: "}
          <a href="https://github.com/michaelbramble/average-run-calc">
            Client Repo
          </a>
          {" / "}
          <a href="https://michaelbramble.github.io/average-run-calc/">
            Live App
          </a>
        </div>
      </main>
    )
  }
}