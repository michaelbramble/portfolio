import React, { Component } from "react";
import SmwScreen from "../../images/smw.jpg";

export default class SmwSite extends Component {
  componentDidMount(){
    let c = document.getElementById('code').childNodes;
    
    c.forEach(this.delayLoop(this.addClass, 50));
  }

  delayLoop = (fn, delay) => {
    return (x, i) => {
      setTimeout(() => {
        fn(x);
      }, i * delay);
    };
  };

  addClass(e){
    e.classList.add('typed');
  }

  render() {
    return (
      <div className='projPageWrapper'>
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
            <a href="https://github.com/mwbramble/smw-speedrunning-site">
              Client Repo
            </a>
            {/* {" / "}
            <a href="">Live App</a> */}
          </div>
        </main>
        <section className='codeContainer' id='code'>
          <p id='ind0'>{`import React, {Component} from 'react';`}</p>
          <p id='ind0'>{`import {Link} from 'react-router-dom';`}</p>
          <p id='ind0'>{`import LEVELS from '../../Data/levelslist';`}</p>
          <p id='ind0'>{`import './levelpage.css';`}</p>
          <br />
          <p id='ind0'>{'export default class LevelPage extends Component {'}</p>
          <p id='ind1'>{'toggleVideo(id){'}</p>
          <p id='ind2'>{'let frame = document.getElementById(id);'}</p>
          <p id='ind2'>{`if(frame.getAttribute('src') === ''){`}</p>
          <p id='ind3'>{`alert('There is no video for this strat yet.');`}</p>
          <p id='ind2'>{'}'}</p>
          <p id='ind2'>{'else{'}</p>
          <p id='ind3'>{`if(frame.style.display === 'block'){`}</p>
          <p id='ind4'>{`frame.style.display = 'none';`}</p>
          <p id='ind3'>{'}'}</p>
          <p id='ind3'>{'else {'}</p>
          <p id='ind4'>{`frame.style.display = 'block';`}</p>
          <p id='ind3'>{'}'}</p>
          <p id='ind2'>{'}'}</p>
          <p id='ind1'>{'}'}</p>
          <br />
          <p id='ind1'>{'render(){'}</p>
          <p id='ind2'>{'const level = LEVELS.filter(l => l.id === this.props.match.params.id);'}</p>
          <br />
          <p id='ind2'>{'return ('}</p>
          <p id='ind3'>{`<section className='levpage-container'>`}</p>
          <p id='ind4'>{`<h1 id='level-name'>{level[0].name}</h1>`}</p>
          <p id='ind4'>{'<small>'}</p>
          <p id='ind5'>{`{'Previous & Next Levels in 96 Exit Route: '}`}</p>
          <p id='ind5'>{'<Link to={`/levels/${level[0].prev.id}`}>{level[0].prev.name}</Link>'}</p>
          <p id='ind5'>{'{' / '}'}</p>
          <p id='ind5'>{'<Link to={`/levels/${level[0].next.id}`}>{level[0].next.name}</Link>'}</p>
          <p id='ind4'>{'</small>'}</p>
          <p id='ind4'>{'{level[0].strats.map(s =>'}</p>
          <p id='ind5'>{`<div className='category'>`}</p>
          <p id='ind6'>{'<h3 id={s.catId}>{s.category}</h3>'}</p>
          <p id='ind6'>{'{s.videos.map(v =>'}</p>
          <p id='ind7'>{`<div className='strat'>`}</p>
          <p id='ind8'>{`<h4 id='vid-title'>{v.title}</h4>`}</p>
          <p id='ind8'>{`<button className='button' onClick={() => this.toggleVideo(v.id)}>Show/Hide Video</button>`}</p>
          <p id='ind8'>{`<iframe src={v.link} title={v.title} id={v.id} className='stratVid' frameBorder='0' allowFullScreen={true} />`}</p>
          <p id='ind8'>{`<p id='info'><b>Optimal Time: {v.opTime}</b>`}</p>
          <p id='ind8'>{'<br />'}</p>
          <p id='ind8'>{'{v.info}</p>'}</p>
          <p id='ind7'>{'</div>'}</p>
          <p id='ind6'>{')}'}</p>
          <p id='ind5'>{'</div>'}</p>
          <p id='ind4'>{')}'}</p>
          <p id='ind3'>{'</section>'}</p>
          <p id='ind2'>{')'}</p>
          <p id='ind1'>{'}'}</p>
          <p id='ind0'>{'}'}</p>
        </section>
      </div>
    );
  }
}
