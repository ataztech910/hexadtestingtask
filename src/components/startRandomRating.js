import React from 'react';

const StartRandomRating = props => (
  <button
    type="button"
    onClick={(event) => {
      event.preventDefault();
      props.startRandomProcess();
    }}
  >
    {props.state.startProcess ? 'Stop random rates' : 'Start random rates' }
  </button>
);

export default StartRandomRating;
