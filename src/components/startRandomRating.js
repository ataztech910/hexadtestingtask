import React from 'react';
import Button from '@material-ui/core/Button';

const StartRandomRating = props => (
  <Button
    variant="contained"
    color="primary"
    type="button"
    onClick={(event) => {
      event.preventDefault();
      props.startRandomProcess();
    }}
  >
    {props.state.startProcess ? 'Stop random rates' : 'Start random rates' }
  </Button>
);

export default StartRandomRating;
