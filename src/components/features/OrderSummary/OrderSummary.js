import React from 'react';
import styles from './OrderSummary';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import propTypes from 'prop-types';

class OrderSummary extends React.Component {

  static propTypes = {
    tripCost: propTypes.node,
    options: propTypes.object,
  }

  render() {
    const { tripCost, options } = this.props;
    const totalPrice = calculateTotal(formatPrice(tripCost), options);
    
    return (
      < h2 className={styles.component} > Total: <strong>${totalPrice} </strong>
      </h2 >
    );
  }
}
export default OrderSummary;