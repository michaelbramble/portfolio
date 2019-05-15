import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Projects from './Projects';
import './styles/app.css';

function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Switch>
          <Route
            exact path={'/'}
            component={Home}
          />
          <Route
            exact path={'/projects'}
            component={Projects}
          />
          <Route
            exact path={'/about'}
            component={About}
          />
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

export default App;