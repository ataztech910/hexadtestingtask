import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import StartRandomRating from '../../components/startRandomRating';
import StartRandomContainer from '../../containers/StartRandomContainer';

configure({ adapter: new Adapter() });
const dispatch = jest.fn();

const mockStore = configureMockStore();
const store = mockStore({});

describe('Start random process button check', () => {
  const props = {
    startRandomProcess: dispatch,
    state: {
      startProcess: false,
    },
  };
  const element = shallow(<StartRandomRating {...props} />);
  const elementContainer = shallow(<StartRandomContainer store={store} />).dive();
  it('renders properly', () => {
    expect(element).toMatchSnapshot();
  });
  it('Container renders properly', () => {
    expect(elementContainer).toMatchSnapshot();
  });

  it('Random rating process on click', () => {
    element.find('.randomRatingProcess').simulate('click', { preventDefault() { } });
    expect(dispatch.mock.calls.length).toEqual(1);
  });
});
