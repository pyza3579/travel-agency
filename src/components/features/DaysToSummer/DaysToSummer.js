import React from 'react';
import styles from '././DaysToSummer.scss';

class DaysToSummer extends React.Component {
  
  daysToSummer = () => {
    const summer = new Date(new Date().getYear(), 5, 21);
    if (new Date().getMonth() == 8 && new Date().getDate() > 22) {
      summer.setYear(summer.getYear() + 1); 
    }  
    
    const daysToSummer = Math.ceil((summer.getTime() - new Date().getTime()));

    if (daysToSummer == 1) {
      return '1 day to summer!';
    } else if (daysToSummer< 0 && daysToSummer > -93) {
      return null;
    } else {
      return daysToSummer;
    } 

  }
 
  render() {
    return (
      <div className={styles.component}>
        <h1 className={styles.days}>{this.daysToSummer}</h1>  
        <h1 className={styles.title}>This are days to summer!</h1>  
      </div>
    );
  }
}





export default DaysToSummer;