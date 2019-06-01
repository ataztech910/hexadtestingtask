import React from 'react';
import { connect } from 'react-redux';

export const RatingElement = props => (
  <div>
    { props.name }
    <div className="rating">
        Rating is: { props.rating }
    </div>
  </div>
);
export default connect((state) => { rating: state }, null)(RatingElement);
