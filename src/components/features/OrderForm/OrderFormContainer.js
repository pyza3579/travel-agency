import {connect} from 'react-redux';
import OrderForm from './OrderForm.js';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';


const mapStateToProps = state => ({
  options: getOrderOptions(state),
});
const mapDispatchToProps = (dispatch) => ({
  setOrderOption: option => dispatch(setOrderOption(option)), //Option: skad wiemy, ze ma tu byc?
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);