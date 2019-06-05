import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import RatingElementContainer from '../containers/RatingElementConatainer';

export const RatingList = list => (
  <List className="rating-list">
    {list.fetch.list.ratings && list.fetch.list.ratings
      ? list.fetch.list.ratings.map(element => <ListItem alignItems="flex-start" className="element" key={`element-${element.id}`}><RatingElementContainer {...element} /></ListItem>)
      : 'No elements, pitty =('}
  </List>
);
export default RatingList;
