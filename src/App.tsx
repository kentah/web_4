import React from 'react';
import './App.css';
import { useParams } from 'react-router';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import Bar from './components/nav/bar';

import Home from './components/home';
import Sound from './components/sound';
import Blog from './components/blog';
import BlogPost from './components/blog/blogList/blogPost';

interface RouteParams {
  id: string;
}

// tried to make compatible with pulling id from uri
interface AppComponent extends RouteComponentProps<RouteParams> {}

const App: React.FC = () => {
  let { id } = useParams<RouteParams>();

  console.log('At App', id);
  return (
    <div className="App">
      <Bar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sound" exact component={Sound} />
          <Route path="/blog" exact component={Blog} />
          <Route
            path="/blog/:id"
            component={() => <BlogPost id={parseInt(id)} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
