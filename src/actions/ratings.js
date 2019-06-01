/* eslint-disable import/prefer-default-export */
import { SET_RATING } from './constants';

export const setRating = rating => ({
  type: SET_RATING,
  rating,
});
