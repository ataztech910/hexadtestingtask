/* eslint-disable import/prefer-default-export */
import {
  SET_RATING, GET_RATINGS, GET_ALL, ACT_RANDOM_PROCESS, CHECK_PROCESS_STATUS,
} from './constants';
import service from '../services';

export const setRating = rating => ({
  type: SET_RATING,
  rating,
});

export const fetchData = () => dispatch => service()
  .then((response) => {
    dispatch({ type: GET_RATINGS, ratings: response });
  });

export const getAll = rating => ({
  type: GET_ALL,
  list: rating,
});

export const startRandomProcess = () => ({
  type: ACT_RANDOM_PROCESS,
});

export const checkProcessStatus = () => ({
  type: CHECK_PROCESS_STATUS,
});
