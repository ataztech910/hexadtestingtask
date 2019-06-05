import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { RatingElement } from '../../components/ratingElement';

configure({ adapter: new Adapter() });

describe('Rating element check', () => {
  const props = { rating: 3 };
  const element = shallow(<RatingElement {...props} />);
  it('rednders properly', () => {
    expect(element).toMatchSnapshot();
  });

  it('displays the rating from props', () => {
    expect(element.find('.elementRating').text()).toEqual('Rating is: 3');
  });
});
