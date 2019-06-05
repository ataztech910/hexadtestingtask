import React from 'react';
import RatingElementContainer from '../containers/RatingElementConatainer';

export const RatingList = list => (
  <ul className="rating-list">
    {list.fetch.list.ratings && list.fetch.list.ratings
      ? list.fetch.list.ratings.map(element => <RatingElementContainer key={`element-${element.id}`} {...element} />)
      : 'No elements, pitty =('}
  </ul>
);
export default RatingList;
