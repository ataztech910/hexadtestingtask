import React from 'react';
import './App.scss';
import RatingListContainer from './containers/RatingListContainer';
import StartRandomContainer from './containers/StartRandomContainer';

const App = () => (
  <div className="App">
    <h1>Elements with ratings</h1>
    <StartRandomContainer />
    <RatingListContainer />
  </div>
);

export default App;
