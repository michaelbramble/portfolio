import React, {Component} from 'react';
import './contact.css';

export default class Contact extends Component {
  render(){
    return (
      <main className="contact">
        <div className="contactP">
          <h1>Contact Me</h1>
          <p>
            I am looking for work! Ideally, I would like to stay in the Detroit area. Check me out on <a href="https://github.com/michaelbramble">GitHub</a> and <a href="https://linkedin.com/in/mwbramble">LinkedIn</a> or send
            me an <a href="mailto:mwbramble@gmail.com">Email</a>.
          </p>
          <p>If you wish, you can also take a look at my <a href="https://docs.google.com/document/d/1z6mNQ0Ild4irE0oL7mMRkzhn9vAGdcqlsH3hQZgZZPw/edit?usp=sharing">resume</a> on Google Docs.</p>
        </div>
      </main>
    )
  }
}