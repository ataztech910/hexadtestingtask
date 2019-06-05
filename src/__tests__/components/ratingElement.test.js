import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { RatingElement } from '../../components/ratingElement';

configure({ adapter: new Adapter() });
const dispatch = jest.fn();
describe('Rating element check', () => {
  const props = { name: 'Test', rating: 3, setRating: dispatch };
  const element = shallow(<RatingElement {...props} />);
  it('renders properly', () => {
    expect(element).toMatchSnapshot();
  });

  it('displays the rating from props', () => {
    expect(element.find('.elementRating').props().secondary).toEqual('Rating is: 3');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('increase rating on click', () => {
    element.find('.increaseRating').simulate('click', { preventDefault() { } });
    expect(dispatch.mock.calls.length).toEqual(1);
  });
  it('decrease rating on click', () => {
    element.find('.decreaseRating').simulate('click', { preventDefault() { } });
    expect(dispatch.mock.calls.length).toEqual(1);
  });
});
