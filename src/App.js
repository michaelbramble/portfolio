import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import './styles/app.css';

function App() {
  return (
    <div className="page">
      <Nav />
      <Switch>
        <Route
          exact path={'/'}
          component={Home}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;