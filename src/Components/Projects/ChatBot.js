import React, {Component} from 'react';
import {drawCode, getRepoCommits} from '../../resources/utils';

export default class ChatBot extends Component {
  componentDidMount(){
    drawCode();
  }

  render(){
    return (
      <div className='projPageWrapper'>
        <main className='projContainer'>
          <h1>Twitch Chat Bot</h1>
          <h2>About</h2>
          <p>
            This is a simple Twitch Chat Bot that is used to assist during Super Mario World Tournaments.
          </p>
          <p id='lastUpdated'>Last Updated: {getRepoCommits('mwbramble', 'smw-chat-bot')}</p>
          <h2>Tech Stack</h2>
          <ul className='techStack'>
            <li>TMI.js, dotenv, JavaScript</li>
          </ul>
          <div className='projlinks'>
            {'Links: '}
            <a href="https://github.com/mwbramble/smw-chat-bot">
              Repo
          </a>
          </div>
        </main>
        <section className='codeContainer' id='code'>
          <p id='ind0'>{`if(message.toLowerCase() === '!runners'){`}</p>
          <p id='ind1'>{`if(Cooldown.usable('!runners')){`}</p>
          <p id='ind2'>{`if(currentRunners.length === 0){`}</p>
          <p id='ind3'>{'client.say(Config.channel, `There are no current runners.`);'}</p>
          <p id='ind3'>{`return;`}</p>
          <p id='ind2'>{`}`}</p>
          <p id='ind2'>{`else{`}</p>
          <p id='ind3'>{`let msg = '';`}</p>
          <p id='ind3'>{`for(let i = 0; i < currentRunners.length; i++){`}</p>
          <p id='ind4'>{`if(i === currentRuners.length - 1){`}</p>
          <p id='ind5'>{'msg += ` https://twitch.tv/${currentRunners[i]}`'}</p>
          <p id='ind4'>{`}`}</p>
          <p id='ind4'>{`else{`}</p>
          <p id='ind5'>{'msg += ` https://twitch.tv/${currentRunners[i]} &`'}</p>
          <p id='ind4'>{`}`}</p>
          <p id='ind3'>{`}`}</p>
          <p id='ind3'>{'client.say(Config.channel, `Be sure to follow the runners:` + msg);'}</p>
          <p id='ind3'>{`return;`}</p>
          <p id='ind2'>{`}`}</p>
          <p id='ind1'>{`}`}</p>
          <p id='ind0'>{`}`}</p>
          <br />
          <p id='ind0'>{`if(user.mod && message.toLowerCase().startsWith('!updaterunners')){`}</p>
          <p id='ind1'>{`let msg = message.split(' ');`}</p>
          <p id='ind1'>{`if(msg.length > 1){`}</p>
          <p id='ind2'>{`currentRunners.length = 0;`}</p>
          <p id='ind2'>{`for(let i = 0; i < msg.length; i++){`}</p>
          <p id='ind3'>{`currentRunners.push(msg[i]);`}</p>
          <p id='ind2'>{`}`}</p>
          <p id='ind2'>{`currentRunners.shift();`}</p>
          <p id='ind2'>{'client.say(Config.channel, `Runners updated!`);'}</p>
          <p id='ind1'>{`}`}</p>
          <p id='ind1'>{`return;`}</p>
          <p id='ind0'>{`}`}</p>
        </section>
      </div>
    )
  }
}