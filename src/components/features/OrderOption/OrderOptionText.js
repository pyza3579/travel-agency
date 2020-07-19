import React from 'react';
import styles from './OrderOption.scss';




class OrderOptionText extends React.Component {
  render() {
    return (
      <div>
        <input type='text' className={styles.input}/>
      </div>
    );     
  }
}
export default OrderOptionText;