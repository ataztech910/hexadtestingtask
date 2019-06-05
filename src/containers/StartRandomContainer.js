import { connect } from 'react-redux';
import StartRandomRating from '../components/startRandomRating';
import { startRandomProcess } from '../actions/ratings';

const mapDispatchToProps = dispatch => ({
  startRandomProcess: rating => dispatch(startRandomProcess(rating)),
});

const mapStateToProps = (state) => {
  return { state };
};


export default connect(
  mapStateToProps, mapDispatchToProps,
)(StartRandomRating);
