import React, {Component} from 'react';
import PetfulScreen from '../../images/petful.jpg';
import {drawCode} from '../../resources/utils.js';

export default class Petful extends Component {
  componentDidMount(){
    drawCode();
  }

  render(){
    return (
      <div className='projPageWrapper'>
        <main className="projContainer">
          <h1>Petful</h1>
          <img src={PetfulScreen} alt="Petful" className="projImage" />
          <h2>About</h2>
          <p>
            Petful is a mock site for an animal shelter. The adoption process
            works on a "FIFO" system. Potential adopters are also put into a
            queue so they can only adopt when it's their turn. This project was
            mainly meant as an exercise on data structures and algorithms, and
            was done in one day.
          </p>
          <p>Last updated: April 12, 2019</p>
          <h2>Tech Stack</h2>
          <ul className="techStack">
            <li>Client: HTML, CSS, JavaScript, React, React Router.</li>
            <li>Server: Node.js, Express, Cors, Nodemon.</li>
          </ul>
          <div className="projLinks">
            {"Links: "}
            <a href="https://github.com/mwbramble/petful-client-Michael-Jonathan">
              Client Repo
            </a>
            {" / "}
            <a href="https://github.com/mwbramble/petful-server-Michael-Jonathan">
              Server Repo
            </a>
          </div>
        </main>
        <section className='codeContainer' id='code'>
          <p id='ind0'>{'import React from "react";'}</p>
          <p id='ind0'>{`import './styles/dogs.css';`}</p>
          <p id='ind0'>{'import AdoptButton from "../AdoptButton/AdoptButton";'}</p>
          <br />
          <p id='ind0'>{'export default function Dogs(props) {'}</p>
          <br />
          <p id='ind1'>{'const { displayDog, dogsQueue, handleStart, queueRunning } = props;'}</p>
          <br />
          <p id='ind1'>{'const nextDogs = dogsQueue.map((dog, i) => {'}</p>
          <p id='ind2'>{'return('}</p>
          <p id='ind3'>{`<img className='nextDogImg' key={i} alt={dog.imageDesc} src={dog.imageURL} />`}</p>
          <p id='ind2'>{')'}</p>
          <p id='ind1'>{'})'}</p>
          <br />
          <p id='ind1'>{'return('}</p>
          <p id='ind2'>{'<div className="dogs">'}</p>
          <p id='ind3'>{'{ displayDog'}</p>
          <p id='ind4'>{'? ('}</p>
          <p id='ind5'>{'<>'}</p>
          <p id='ind6'>{'<h3>Dogs</h3>'}</p>
          <p id='ind6'>{`<img className='displayImg' src={ displayDog.imageURL } alt={ displayDog.imageDesc } />`}</p>
          <p id='ind6'>{'<ul>'}</p>
          <p id='ind7'>{'<li>Name: { displayDog.name }</li>'}</p>
          <p id='ind7'>{'<li>Age: { displayDog.age }</li>'}</p>
          <p id='ind7'>{'<li>Breed: { displayDog.breed }</li>'}</p>
          <p id='ind7'>{'<li>Sex: { displayDog.sex }</li>'}</p>
          <p id='ind7'>{'<li>Story: { displayDog.story }</li>'}</p>
          <p id='ind6'>{'</ul>'}</p>
          <p id='ind6'>{'<AdoptButton'}</p>
          <p id='ind7'>{`type={ 'dog' }`}</p>
          <p id='ind7'>{'queueRunning={ queueRunning }'}</p>
          <p id='ind7'>{'handleStart={ handleStart }'}</p>
          <p id='ind6'>{'/>'}</p>
          <p id='ind6'>{'<div className="nextDogs">'}</p>
          <p id='ind7'>{'{ nextDogs }'}</p>
          <p id='ind6'>{'</div>'}</p>
          <p id='ind5'>{'</>'}</p>
          <p id='ind4'>{') '}</p>
          <p id='ind4'>{':<div>No Dogs Are Left!</div>'}</p>
          <p id='ind3'>{'}'}</p>
          <br />
          <p id='ind2'>{'</div>'}</p>
          <p id='ind1'>{')'}</p>
          <p id='ind0'>{'}'}</p>
        </section>
      </div>
    )
  }
}