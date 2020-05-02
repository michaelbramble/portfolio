import React, { Component } from "react";
import AvgRunCalcScreen from "../../images/avgruncalc.png";
import {drawCode, getRepoCommits} from '../../resources/utils.js';

export default class AvgRunCalc extends Component {
  componentDidMount(){
    drawCode();
  }

  render(){
    // this.show();
    return (
      <div className='projPageWrapper'>
        <main className="projContainer">
          <h1>Average Run Calculator</h1>
          <img src={AvgRunCalcScreen} alt="Average Run Calculator" className="projImage" />
          <h2>About</h2>
          <p>
            This is a simple web app that calculates the average time of any amount of a user's runs.
          </p>
          <p id='lastUpdated'>Last updated: {getRepoCommits('mwbramble', 'average-run-calc')}</p>
          <h2>Tech Stack</h2>
          <ul className="techStack">
            <li>Client: HTML, CSS, JavaScript.</li>
          </ul>
          <div className="projLinks">
            {"Links: "}
            <a href="https://github.com/mwbramble/average-run-calc">
              Client Repo
            </a>
            {" / "}
            <a href="https://mwbramble.github.io/average-run-calc/">
              Live App
            </a>
          </div>
        </main>
        <section className='codeContainer' id='code'>
          <p id='ind0'>const d = document;</p>
          <p id='ind0'>const h = d.getElementById('hrs');</p>
          <p id='ind0'>const m = d.getElementById('min');</p>
          <p id='ind0'>const s = d.getElementById('sec');</p>
          <br />
          <p id='ind0'>let runs = [];</p>
          <br />
          <p id='ind0'>d.getElementById('addBtn').onclick = addRun;</p>
          <p id='ind0'>d.getElementById('avgBtn').onclick = getAverage;</p>
          <br />
          <p id='ind0'>function addRun(){'{'}</p>
          <p id='ind1'>if(!h.value.length &amp;&amp; !m.value.length &amp;&amp; !s.value.length){'{'}</p>
          <p id='ind2'>alert('You need to input the run time!');</p>
          <p id='ind1'>}</p>
          <p id='ind1'>else{'{'}</p>
          <p id='ind2'>let runTime = h.value * 3600 + m.value * 60 + s.value * 1;</p>
          <p id='ind2'>if(d.getElementById('runs').innerHTML === ''){'{'}</p>
          <p id='ind3'>d.getElementById('runs').innerHTML += (`</p>
          <p id='ind4'>Your Runs:</p>
          <p id='ind4'>{'<br>'}</p>
          <p id='ind4'>{`<ul id='runs-list'></ul>`}</p>
          <p id='ind3'>`);</p>
          <p id='ind3'>d.getElementById('runs-list').innerHTML += (`{'<li>${formatRun(runTime)}</li>'}`);</p>
          <p id='ind2'>}</p>
          <p id='ind2'>else{'{'}</p>
          <p id='ind3'>d.getElementById('runs-list').innerHTML += (`{'<li>${formatRun(runTime)}</li>'}`);</p>
          <p id='ind2'>}</p>
          <p id='ind2'>runs.push(runTime);</p>
          <p id='ind2'>h.value = '';</p>
          <p id='ind2'>m.value = '';</p>
          <p id='ind2'>s.value = '';</p>
          <p id='ind1'>}</p>
          <p id='ind0'>}</p>
          <br />
          <p id='ind0'>function getAverage(){'{'}</p>
          <p id='ind1'>if(runs.length === 0){'{'}</p>
          <p id='ind2'>alert('You need to add runs!')</p>
          <p id='ind1'>}</p>
          <p id='ind1'>else{'{'}</p>
          <p id='ind2'>let sum = runs.reduce((a, b) => {'{return a + b}'});</p>
          <p id='ind2'>let avgRun = sum / runs.length;</p>
          <br />
          <p id='ind2'>d.getElementById('result').innerHTML = ('Average: ' + formatRun(avgRun));</p>
          <p id='ind1'>}</p>
          <p id='ind0'>}</p>
          <br />
          <p id='ind0'>function formatRun(time){'{'}</p>
          <p id='ind1'>let hrs = Math.floor(time / 3600);</p>
          <p id='ind1'>let min = Math.floor((time - hrs * 3600) / 60);</p>
          <p id='ind1'>let sec = Math.floor((time - hrs * 3600) - min * 60);</p>
          <br />
          <p id='ind1'>if(min {'<'} 10){'{'}</p>
          <p id='ind2'>min = '0' + min;</p>
          <p id='ind1'>}</p>
          <br />
          <p id='ind1'>if(sec {'<'} 10){'{'}</p>
          <p id='ind2'>sec = '0' + sec;</p>
          <p id='ind1'>}</p>
          <br />
          <p id='ind1'>return timeStr = {'`${hrs}:${min}:${sec}`'};</p>
          <p id='ind0'>}</p>
        </section>
      </div>
    )
  }
}