import React from 'react';
import './App.scss';
import Typography from '@material-ui/core/Typography';
import RatingListContainer from './containers/RatingListContainer';
import StartRandomContainer from './containers/StartRandomContainer';

const App = () => (
  <div className="App">
    <Typography variant="h1" component="h1">
      Rating list
    </Typography>
    <StartRandomContainer />
    <RatingListContainer />
  </div>
);

export default App;
