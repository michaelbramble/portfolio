import React, {Component} from 'react';

export default class Contact extends Component {
  render(){
    return (
      <main className="contact">
        <div className="contactP">
          <h1>Contact Me</h1>
          <p>
            I am looking for work! Check me out on <a href="https://github.com/michaelbramble">GitHub</a> and <a href="https://linkedin.com/in/mwbramble">LinkedIn</a> or send
            me an <a href="mailto:mwbramble@gmail.com">Email</a>.
          </p>
          <p>If you wish, you can also take a look at my <a href="https://docs.google.com/document/d/e/2PACX-1vTic7OZ1QD1qP3PZPHwTngLC5zuvDYEw2kU3aJhsebJr1h5uMR5tbzFthSTpdv87_DTL7LrGFYKYvPr/pub">resume</a> (published with Google Docs).</p>
        </div>
      </main>
    )
  }
}