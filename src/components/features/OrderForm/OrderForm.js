import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import propTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


class OrderForm extends React.Component {

  static propTypes = {
    tripCost: propTypes.node,
    options: propTypes.object,
    setOrderOption: propTypes.func,
  }

  render() {
    const {tripCost,options, setOrderOption} = this.props;
    
    return (
      <Row>
        {pricing.map(option =>
          <Col md={4} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}>  </OrderOption>
          </Col>
        )}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}>         
          </OrderSummary>
        </Col>
      </Row>
    );
  }
}

export default OrderForm;
