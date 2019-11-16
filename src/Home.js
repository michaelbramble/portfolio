import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <main className="main">
        <h1>Home</h1>
        <p>Welcome to my portfolio site!</p>
        <p>
          This, along with most of my other projects, was built with React. On
          this site you can check out some of these projects, learn more about
          me, or figure out how to get in contact with me.
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
