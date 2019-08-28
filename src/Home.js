import React, { Component } from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import "./styles/home.css";

export default class Home extends Component {
  render() {
    return (
      <>
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
        </main>
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Contact />
      </>
    );
  }
}