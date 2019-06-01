import ratingReducer from '../../reducers/rating';
import { SET_RATING } from '../../actions/constants';

describe('Rating Reducer ', () => {
  it('set a rating', () => {
    const rating = 5;
    expect(ratingReducer(undefined, { type: SET_RATING, rating })).toEqual(rating);
  });
});
