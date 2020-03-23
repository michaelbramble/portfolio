import React, {Component} from 'react';
import PassGenScreen from '../../images/passgen.png';
import {drawCode} from '../../resources/utils.js';

export default class PassGen extends Component {
  componentDidMount(){
    drawCode();
  }

  render(){
    return (
      <div className='projPageWrapper'>
      <main className="projContainer">
        <h1>Password Generator</h1>
        <img src={PassGenScreen} alt="Password Generator" className="projImage" />
        <h2>About</h2>
        <p>
          This is a simple web app that generates 8, 12, 16, or 32 character passwords.
        </p>
        <p>Last updated: March 3, 2020</p>
        <h2>Tech Stack</h2>
        <ul className="techStack">
          <li>
            Client: HTML, CSS, JavaScript.
          </li>
        </ul>
        <div className="projLinks">
          {"Links: "}
          <a href="https://github.com/mwbramble/password-generator">
            Client Repo
          </a>
          {" / "}
          <a href="https://mwbramble.github.io/password-generator/">
            Live App
          </a>
        </div>
      </main>
      <section className='codeContainer' id='code'>
        <p id='ind0'>const chars = ['A', 'B', 'C', 'D', ... '|'];</p>
        <p id='ind0'>document.getElementById('genBtn').onclick = generate;</p>
        <br />
        <p id='ind0'>function generate() {'{'}</p>
        <p id='ind1'>let passLength = document.getElementById('passLength').value;</p>
        <p id='ind1'>if(passLength == 0){'{'}</p>
        <p id='ind2'>alert('Please select a length for your password!')</p>
        <p id='ind1'>}</p>
        <p id='ind1'>else{'{'}</p>
        <p id='ind2'>let password = '';</p>
        <p id='ind2'>{`for(let i = 0; i < passLength; i++){`}</p>
        <p id='ind3'>password += chars[Math.floor(Math.random() * chars.length)];</p>
        <p id='ind2'>}</p>
        <p id='ind2'>document.getElementById('results').innerHTML = `${'{'}password{'}'}`;</p>
        <p id='ind1'>}</p>
        <p id='ind0'>}</p>
      </section>
      </div>
    )
  }
}