import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Munchstats from './Munchstats';
import Petful from './Petful';
import Quiz from './Quiz';
import Contact from './Contact';
import './styles/app.css';

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
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;