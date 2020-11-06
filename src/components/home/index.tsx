import React from 'react';

import './homeStyle.css';

const Home: React.FC = () => {
  return (
    <div className="mainContainer">
      <div className="textLeft">
        <h1>This is home</h1>
      </div>
      <div className="textRight">
        <h1>Some more text, something else</h1>
      </div>
    </div>
  );
};

export default Home;
