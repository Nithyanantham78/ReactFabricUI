import React from 'react';
import {UserCard} from './UserCard';
import { shallow } from 'enzyme';

let userDetailsProps = {"avatar":'img.png',"first_name":"firstName","last_name":"lastName"};

describe('UserCard Component', () => {
    it('should be defined', () => {
        const wrapper = shallow(<UserCard userDetails={userDetailsProps} />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('img')).toHaveLength(1);
        let container = wrapper.find('.container');
        expect(container.find('b').text()).toEqual('firstName');
        expect(container.find('p').text()).toEqual('lastName');
    });
});
