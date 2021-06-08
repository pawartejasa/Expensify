import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../Components/Header';
import toJSON from 'enzyme-to-json';
test('Should render header correctly', ()=>{
    const wrapper= shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});