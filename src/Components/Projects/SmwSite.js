import React, { Component } from "react";
import SmwScreen from "../../images/smw.jpg";
import {drawCode, getRepoCommits} from '../../resources/utils.js';

export default class SmwSite extends Component {
  componentDidMount(){
    drawCode();
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
          <p id='lastUpdated'>Last updated: {getRepoCommits('mwbramble', 'smw-speedrunning-site')}</p>
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
          <p id='ind0'>{`render(){`}</p>
          <p id='ind1'>{`return (`}</p>
          <p id='ind2'>{`<section className='level-page-container'>`}</p>
          <p id='ind3'>{`<h1>{this.state.l.name}</h1>`}</p>
          <p id='ind3'>{`<ul className='level-categories'>`}</p>
          <p id='ind4'>{`{this.state.l.categories.map(c =>`}</p>
          <p id='ind5'>{`<li key={c.id} onClick={(e) => this.setState({activeCategory: c})}>{c.title}</li>`}</p>
          <p id='ind4'>{`)}`}</p>
          <p id='ind3'>{`</ul>`}</p>
          <p id='ind3'>{`<div className='level-active-category'>`}</p>
          <p id='ind4'>{`<h2>{this.state.activeCategory.title}</h2>`}</p>
          <p id='ind4'>{`<h3>{this.state.activeCategory.exits.normal ? 'Normal Exit' : ''}</h3>`}</p>
          <p id='ind4'>{`<ul className='active-strats-normal'>`}</p>
          <p id='ind5'>{`{this.state.activeCategory.exits.normal ? this.state.activeCategory.exits.normal.strats.map(s => {`}</p>
          <p id='ind6'>{`return (`}</p>
          <p id='ind6'>{`<li key={s.id} onClick={(e) => this.setState({activeStrat: s})}>`}</p>
          <p id='ind7'>{"{s.name}{s.time ? ` - ${s.time}` : ''}"}</p>
          <p id='ind7'>{`<br />`}</p>
          <p id='ind7'>{`{s.id === this.state.activeStrat.id ? (`}</p>
          <p id='ind8'>{`<ul id={s.id}>`}</p>
          <p id='ind9'>{`<li><a href={s.link}>Link</a></li>`}</p>
          <p id='ind9'>{`{s.desc === '' ? '' : <li>{s.desc}</li>}`}</p>
          <p id='ind9'>{`<li>Source: {s.source}</li>`}</p>
          <p id='ind8'>{`</ul>`}</p>
          <p id='ind7'>{`) : ''}`}</p>
          <p id='ind6'>{`</li>`}</p>
          <p id='ind6'>{`)`}</p>
          <p id='ind5'>{`}) : ''}`}</p>
          <p id='ind4'>{`</ul>`}</p>
          <p id='ind4'>{`<h3>{this.state.activeCategory.exits.secret ? 'Secret Exit' : ''}</h3>`}</p>
          <p id='ind4'>{`<ul className='active-strats-secret'>`}</p>
          <p id='ind5'>{`{this.state.activeCategory.exits.secret ? this.state.activeCategory.exits.secret.strats.map(s => {`}</p>
          <p id='ind6'>{`return (`}</p>
          <p id='ind6'>{`<li key={s.id} onClick={(e) => this.setState({activeStrat: s})}>`}</p>
          <p id='ind7'>{"{s.name}{s.time ? ` - ${s.time}` : ''}"}</p>
          <p id='ind7'>{`<br />`}</p>
          <p id='ind7'>{`{s.id === this.state.activeStrat.id ? (`}</p>
          <p id='ind8'>{`<ul id={s.id}>`}</p>
          <p id='ind9'>{`<li><a href={s.link}>Link</a></li>`}</p>
          <p id='ind9'>{`{s.desc === '' ? '' : <li>{s.desc}</li>}`}</p>
          <p id='ind9'>{`<li>Source: {s.source}</li>`}</p>
          <p id='ind8'>{`</ul>`}</p>
          <p id='ind7'>{`) : ''}`}</p>
          <p id='ind6'>{`</li>`}</p>
          <p id='ind6'>{`)`}</p>
          <p id='ind5'>{`}) : ''}`}</p>
          <p id='ind4'>{`</ul>`}</p>
          <p id='ind3'>{`</div>`}</p>
          <p id='ind3'>{`<div className='level-info'>`}</p>
          <p id='ind4'>{`<img src={this.state.l.image} alt='Screenshot' />`}</p>
          <p id='ind4'>{`<p>Available Powerups: {this.state.l.powerups.join(', ')}</p>`}</p>
          <p id='ind4'>{`<p>This level {this.state.l.dragoncoins ? 'has' : 'does not have'} Dragon Coins.</p>`}</p>
          <p id='ind3'>{`</div>`}</p>
          <p id='ind2'>{`</section>`}</p>
          <p id='ind1'>{`)`}</p>
          <p id='ind0'>{`}`}</p>
        </section>
      </div>
    );
  }
}
