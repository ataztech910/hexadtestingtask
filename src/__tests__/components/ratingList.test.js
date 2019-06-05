import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ListItem from '@material-ui/core/ListItem';
import { RatingList } from '../../components/ratingList';
import RatingElementContainer from '../../containers/RatingElementConatainer';
import RatingListContainer from '../../containers/RatingListContainer';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('RatingList check', () => {
  const props = {
    fetch: {
      list: {
        ratings: [{ name: 'Test', rating: 1 }],
      },
    },
  };
  const listElement = shallow(<RatingList {...props} />);
  const elementContainer = shallow(<RatingElementContainer store={store} />).dive();
  const elementListContainer = shallow(<RatingListContainer store={store} />).dive();

  it('renders properly', () => {
    expect(listElement).toMatchSnapshot();
  });

  it('renders container properly', () => {
    expect(elementContainer).toMatchSnapshot();
    expect(elementListContainer).toMatchSnapshot();
  });

  it('renders list properly', () => {
    expect(listElement.find('.element')).toBeDefined();
  });
  it('List item mounted', () => {
    expect(listElement.contains(<ListItem {...props} />)).toBeDefined();
    expect(listElement.find('.element')).toHaveLength(props.fetch.list.ratings.length);
  });
});
