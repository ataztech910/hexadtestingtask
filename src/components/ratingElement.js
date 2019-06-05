import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export const RatingElement = props => (
  <>
    <ListItemAvatar>
      <Avatar
        alt={`Image for °${props.name}`}
        src={`https://picsum.photos/80/80?image=${props.imgId}`}
      />
    </ListItemAvatar>
    <ListItemText className="elementRating" primary={props.name} secondary={`Rating is: ${props.rating}`} />
    <ListItemSecondaryAction>
      <IconButton
        color="primary"
        component="span"
        className="increaseRating"
        onClick={(event) => {
          event.preventDefault();
          props.setRating({ id: props.id, action: 1 });
        }}
      >
        <Icon>thumb_up</Icon>
      </IconButton>
      <IconButton
        color="primary"
        className="decreaseRating"
        component="span"
        onClick={(event) => {
          event.preventDefault();
          props.setRating({ id: props.id, action: -1 });
        }}
      >
        <Icon>thumb_down</Icon>
      </IconButton>
    </ListItemSecondaryAction>
  </>
);
export default RatingElement;
