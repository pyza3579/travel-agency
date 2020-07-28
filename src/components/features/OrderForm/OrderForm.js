import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import propTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName, 
    tripId, 
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

class OrderForm extends React.Component {

  static propTypes = {
    tripCost: propTypes.node,
    options: propTypes.object,
    setOrderOption: propTypes.func,
    tripName: propTypes.string,
    tripId: propTypes.string,
    countryCode: propTypes.node,
  }

  render() {
    const {tripCost,options, setOrderOption, tripName, tripId, countryCode} = this.props;
    
    return (
      <Grid>
        <Row>
          {pricing.map(option =>
            <Col md={4} key={option.id}>
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}>  </OrderOption>
            </Col>
          )}
          <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options}>         
            </OrderSummary>
            <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, countryCode)}>Order now!</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default OrderForm;
