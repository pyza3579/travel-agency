import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';


const select = {
  title: '.title',
  descr: '.promoDescription',
};
const mockProps = {
  title: 'Happy Hour',
  promoDescription: 'HappyHour is now!',
};
describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render title and description', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.descr)).toEqual(true);
  });
  
  it('should render correct title and description', () => {
    const expectedTitle = 'This is HappyHourAd';
    const component = shallow(<HappyHourAd {...mockProps}/>);

    const renderedName = component.find(select.title).text();
    expect(renderedName).toEqual(expectedTitle);

  });
});
const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.descr).text();
    expect(renderedTime).toEqual(expectedDescription);   
    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
    const component = shallow(<HappyHourAd {...mockProps} />);
       
    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);
    const renderedTime = component.find(select.descr).text();
    expect(renderedTime).toEqual(expectedDescription);
       
    global.Date = trueDate;
    jest.useRealTimers();
  });
};

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1'); 
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('12:00:10', mockProps.promoDescription); 
  checkDescriptionAtTime('12:30:00', mockProps.promoDescription); 
  checkDescriptionAtTime('12:58:00', mockProps.promoDescription); 
});

describe('Component HappyHourAd with mocked Date and delay last', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('12:10:00', 1, mockProps.promoDescription);
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
}); 




