import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Item from '../item';
import './bar.css';

import Home from '../../home';
import About from '../../about';
import Blog from '../../blog';
import BlogPost from '../../blog/blogList/blogPost';

interface RouteType {
  linkTo: string;
  label: string;
  component: JSX.Element;
  id: string;
}

const ROUTES: RouteType[] = [
  { linkTo: '/', label: 'Home', component: <Home />, id: 'home' },
  { linkTo: '/about', label: 'About', component: <About />, id: 'about' },
  { linkTo: '/blog', label: 'Blog', component: <Blog />, id: 'blog' },
];

const Bar: React.FC = () => {
  useEffect(() => {
    document.getElementById('home')!.focus(); // focus on the home link by default
  });

  return (
    <div>
      <ul>
        <Router>
          {ROUTES.map(route => {
            return (
              <li key={route.id}>
                <Item id={route.id} linkTo={route.linkTo} label={route.label} />
              </li>
            );
          })}
          <Switch>
            {ROUTES.map(route => {
              return (
                <Route exact path={route.linkTo}>
                  {route.component}
                </Route>
              );
            })}
          </Switch>
        </Router>
      </ul>
    </div>
  );
};

export default Bar;
