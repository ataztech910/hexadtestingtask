import { SET_RATING } from '../actions/constants';

const ratingReducer = (state = [], action) => {
  switch (action.type) {
    case SET_RATING:
      return action.rating;
    default:
      return state;
  }
};
export default ratingReducer;
