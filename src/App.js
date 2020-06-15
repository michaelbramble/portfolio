import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import Munchstats from './Components/Projects/Munchstats';
import SmwSite from './Components/Projects/SmwSite';
import AvgRunCalc from './Components/Projects/AvgRunCalc';
import PassGen from './Components/Projects/PassGen';
import Petful from './Components/Projects/Petful';
import AprendeMas from './Components/Projects/AprendeMas';
import Quiz from './Components/Projects/Quiz';
import ChatBot from './Components/Projects/ChatBot';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import './style.css';

function App() {
  return (
    <div className="page-container">
      <Nav />
      <div className="content-wrap">
        <Switch>
          <Route
            exact path={'/'}
            component={Home}
          />
          <Route
            exact path={'/contact'}
            component={Contact}
          />
          <Route
            exact path={'/projects'}
            component={Projects}
          />
          <Route
            exact path={'/projects/munch_stats'}
            component={Munchstats}
          />
          <Route
            exact path={'/projects/smw_speedrunning_info'}
            component={SmwSite}
          />
          <Route
            exact path={'/projects/average_run_calculator'}
            component={AvgRunCalc}
          />
          <Route
            exact path={'/projects/password_generator'}
            component={PassGen}
          />
          <Route
            exact path={'/projects/petful'}
            component={Petful}
          />
          <Route
            exact path={'/projects/aprende_mas'}
            component={AprendeMas}
          />
          <Route
            exact path={'/projects/quiz_app'}
            component={Quiz}
          />
          <Route
            exact path={'/projects/chat_bot'}
            component={ChatBot}
          />
          <Route
            component={NotFound}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;