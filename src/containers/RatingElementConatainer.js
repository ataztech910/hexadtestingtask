import { connect } from 'react-redux';
import { RatingElement } from '../components/ratingElement';
import { setRating } from '../actions/ratings';

const mapDispatchToProps = dispatch => ({
  setRating: rating => dispatch(setRating(rating)),
});

export default connect(
  null, mapDispatchToProps,
)(RatingElement);
