import React from 'react';
import styles from '././DaysToSummer.scss';

class DaysToSummer extends React.Component {
  
  daysToSummer = () => {
    const summer = new Date(new Date().getFullYear(), 5, 22);

    if (new Date().getMonth() >= 7 && new Date().getDate() >= 22) {
      summer.setYear(summer.getFullYear() + 1); 
    } 
    const daysToSummer = Math.floor((summer - new Date()) / 86400000);


    if (daysToSummer == 1) {
      return '1 day to summer!';
    } else if (daysToSummer <= 0 && daysToSummer > -93) {
      return '';
    } else {
      return daysToSummer;
    } 
  }
 
  render() {
    return (
      <div className={styles.component}>
        <h1 className={styles.days}>{this.daysToSummer()}</h1>  
        <h1 className={styles.title}>This are days to summer!</h1>  
      </div>
    );
  }
}





export default DaysToSummer;