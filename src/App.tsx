import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import Bar from './components/nav/bar';

import Home from './components/home';
import Sound from './components/sound';
import Blog from './components/blog';
import BlogPost from './components/blog/blogList/blogPost';

interface RouteParams {
  id: string;
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Bar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sound" exact component={Sound} />
          <Route path="/blog" exact component={Blog} />
          <Route
            exact
            path="/blog/:id"
            component={({ match }: RouteComponentProps<RouteParams>) => (
              <BlogPost id={parseInt(match.params.id)} />
            )}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
