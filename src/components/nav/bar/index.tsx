import React, { useEffect } from 'react';
import Item from '../item';
import './bar.css';

interface RouteType {
  linkTo: string;
  label: string;
  id: string;
}

const ROUTES: RouteType[] = [
  { linkTo: '/', label: 'Home', id: 'home' },
  { linkTo: '/sound', label: 'Sound', id: 'sound' },
  { linkTo: '/blog', label: 'Blog', id: 'blog' },
];

const Bar: React.FC = () => {
  useEffect(() => {
    document.getElementById('home')!.focus(); // focus on the home link by default
  });

  return (
    <div className="bar">
      <ul>
        {ROUTES.map(route => {
          return (
            <li key={route.id}>
              <Item id={route.id} linkTo={route.linkTo} label={route.label} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Bar;
