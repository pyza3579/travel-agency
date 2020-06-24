import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTripTag, removeTripTag, changeTripDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  addTripTag: tag => dispatch(addTripTag(tag)),
  removeTripTag: tag => dispatch(removeTripTag(tag)),
  changeTripDuration: (type, value) => dispatch(changeTripDuration(type, value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
