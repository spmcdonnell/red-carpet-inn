import Header from '../../Header';
import React from 'react';
import { shallow } from 'enzyme';

describe('Header', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('li').text()).toBe('Menu Item 1');
    expect(wrapper).toMatchSnapshot();
  });
});
