import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
  days: '.days',
};

const mockProps = {
  title: 'It is summer!',
};
describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer/>);
    expect(component).toBeTruthy();
  });

  it('should render title and days', () => {
    const component = shallow(<DaysToSummer/>);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.days)).toEqual(true);
  });

  it('should render correct title', () => {
    const expectedTitle = 'This are days to summer!';
    const component = shallow(<DaysToSummer {...mockProps}/>);

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
    global.Date = mockDate(`${time}T12:00:00Z`);
    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.days).text();
    expect(renderedTime).toEqual(expectedDescription);   
    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtTime('2020-06-21', ''); //
  checkDescriptionAtTime('2020-06-20', '1 day to summer!');
  checkDescriptionAtTime('2020-09-23', '267'); //
});