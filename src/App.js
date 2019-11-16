import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Munchstats from './Munchstats';
import Petful from './Petful';
import Quiz from './Quiz';
import Contact from './Contact';
import NotFound from './NotFound';
import './style.css';

function App() {
  return (
    <div className="page-container">
      <Nav />
      <div className="content-wrap">
        <Switch>
          <Route
            exact path={'/about'}
            component={About}
          />
          <Route
            exact path={'/projects'}
            component={Projects}
          />
          <Route
            exact path={'/projects/munchstats'}
            component={Munchstats}
          />
          <Route
            exact path={'/projects/petful'}
            component={Petful}
          />
          <Route
            exact path={'/projects/quizapp'}
            component={Quiz}
          />
          <Route
            exact path={'/contact'}
            component={Contact}
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