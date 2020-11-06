import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Bar from './components/nav/bar';

import Home from './components/home';
import Sound from './components/sound';
import Blog from './components/blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Bar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sound" exact component={Sound} />
            <Route path="/blog" exact component={Blog} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
