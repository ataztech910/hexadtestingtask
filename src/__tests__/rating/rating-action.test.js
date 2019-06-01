import { SET_RATING } from '../../actions/constants';
import { setRating } from '../../actions/ratings';

it('creates an action to set rating', () => {
  const rating = 0;
  const expectedAction = { type: SET_RATING, rating };
  expect(setRating(rating)).toEqual(expectedAction);
});
