import { connect } from 'react-redux';
import { RatingList } from '../components/ratingList';
import { getAll } from '../actions/ratings';

const mapStateToProps = (state) => {
  const fetch = getAll(state);
  return { fetch };
};


export default connect(
  mapStateToProps, getAll,
)(RatingList);
