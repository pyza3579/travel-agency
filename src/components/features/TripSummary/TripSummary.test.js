import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct adress',() => {
    const id = 'abc';
    const expectedTags=['title', 'hello', 'text'];
    const component = shallow(<TripSummary id= {id} tags={expectedTags}/>);
    const correctAdress = component.find('.link').prop('to'); 
    expect(correctAdress).toEqual(`/trip/${id}`);
    
  });

  it('should check if image has correct src and alt', () => {
    const expectedName = 'Lorem ipsum';
    const expectedSrc = 'image.jpg';
    const expectedTags=['title', 'hello', 'text'];
    const component = shallow(<TripSummary image={expectedSrc} name={expectedName} tags={expectedTags}/>);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);  
    expect(component.find('img').prop('alt')).toEqual(expectedName); 
  });

  it('should check if name, cost and days render correct', () => {
    const expectedName = 'Lorem ipsum';
    const expectedDays = 2;
    const expectedCost = '30';
    const expectedTags=['title', 'hello', 'text'];
    const component = shallow(<TripSummary name={expectedName} days={expectedDays} cost={expectedCost} tags={expectedTags}/>);

    expect(component.find('.name')).toEqual(expectedName);
    expect(component.find('.days')).toEqual(expectedDays);
    expect(component.find('.cost')).toEqual(expectedCost);

  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should test tag', () => {
    const tagOne = '1';
    const tagTwo = '2';
    const tagThree = '3';
    const tag = [tagOne, tagTwo, tagThree];
    const component = shallow(<TripSummary tags={tag}/>);
    expect(component.find('.tags span').at(0).get(0));
    expect(component.find('.tags span').at(1).get(1));
    expect(component.find('.tags span').at(2).get(2));
  });

  it('should not render if tags is fals or empty', () => {//totalnie nie wiem
    const tag = ['tagOne', 'tagTwo', 'tagThree'];
    const component = shallow(<TripSummary tags={tag}/>);
    expect(component).toEqual;
  });

});