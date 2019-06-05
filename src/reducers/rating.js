import {
  SET_RATING, GET_RATINGS, GET_ALL, ACT_RANDOM_PROCESS, CHECK_PROCESS_STATUS, GET_BUTTON_STATUS,
} from '../actions/constants';

const ratingReducer = (state = [], action) => {
  switch (action.type) {
    case SET_RATING:
      const defaultValue = action.rating.rating + 1;
      if (state.ratings) {
        state.ratings.map((element) => {
          if (element.id === action.rating.id) {
            if (action.rating.action > 0) element.rating++;
            else element.rating--;
          }
          return element;
        });
        state.ratings.sort((a, b) => b.rating - a.rating);
        return {
          ...state,
          ratings: [...state.ratings],
        };
      }
      return defaultValue;
    case GET_RATINGS:
      action.ratings.sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        ratings: [...state, ...action.ratings],
      };
    case GET_ALL:
      action.ratings.sort((a, b) => b.rating - a.rating);
      return {
        ...state, ...action.ratings,
      };
    case ACT_RANDOM_PROCESS:
      state.startProcess = !state.startProcess;
      console.log('start process ', state);
      return {
        ...state,
      };
    case CHECK_PROCESS_STATUS:
      console.log('check process ', action);
      if (state.ratings) {
        const itemID = Math.floor(Math.random() * state.ratings.length);
        const randomRating = Math.round(Math.random()) * 2 - 1;
        const item = state.ratings[itemID];
        item.rating += randomRating;
        state.ratings[itemID] = item;
        state.ratings.sort((a, b) => b.rating - a.rating);
        console.log('random item is ', item);
      }
      return {
        ...state,
      };
    case GET_BUTTON_STATUS:
      console.log('check button');
      return state;
    default:
      return state;
  }
};
export default ratingReducer;
