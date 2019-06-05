import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { RatingElement } from '../../components/ratingElement';

configure({ adapter: new Adapter() });

describe('Rating element check', () => {
  const props = { name: 'Test', rating: 3 };
  const element = shallow(<RatingElement {...props} />);
  it('renders properly', () => {
    expect(element).toMatchSnapshot();
  });

  it('displays the rating from props', () => {
    expect(element.find('.elementRating').props()['secondary']).toEqual('Rating is: 3');
  });
});
