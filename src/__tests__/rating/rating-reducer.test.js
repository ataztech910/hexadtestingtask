import ratingReducer from '../../reducers/rating';
import { SET_RATING, GET_RATINGS, GET_ALL } from '../../actions/constants';

describe('Rating Reducer ', () => {
  it('set a rating', () => {
    const rating = {
      id: '5cf0f6eb3a1770ee0c3453fa',
      rating: 1,
    };
    expect(ratingReducer(undefined, { type: SET_RATING, rating })).toBeGreaterThan(rating.rating);
  });

  it('get a rating', () => {
    const action = {
      ratings: [],
    };
    expect(ratingReducer({}, { type: GET_RATINGS, ...action })).toEqual({});
    expect(ratingReducer({}, { type: GET_ALL, ...action })).toEqual({});
  });
});
