import React from 'react';
import styles from './HappyHourAd.scss';


class HappyHourAd extends React.Component {

  constructor(){
    super();
    setInterval(() => this.forceUpdate(), 1000);

  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
      
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
      
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
  render() {
    let time = this.getCountdownTime();
    if (time > 82800) {
      time = 'HappyHour is now!';
    } else {
      time = this.getCountdownTime();
    }
    return (
      <div>
        <h3 className={styles.title}>This is HappyHourAd</h3>    
        <div className='promoDescription'>{time}</div>
      </div>
    );
  }
}

export default HappyHourAd;