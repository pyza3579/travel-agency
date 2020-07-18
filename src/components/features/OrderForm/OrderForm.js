import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import propTypes from 'prop-types';


class OrderForm extends React.Component {

  static propTypes = {
    tripCost: propTypes.node,
    options: propTypes.object,
  }

  render() {
    const {tripCost,options} = this.props;
    return (
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}>         
          </OrderSummary>
        </Col>
      </Row>
    );
  }
}

export default OrderForm;
