import React from 'react';
import {DropDownComponent} from './DropDownComponent';
import { shallow,mount } from 'enzyme';

let dataProps = [{key:'1',text:'1'},{key:'2',text:'2'}];

describe('Dropdown Component', () => {
    it('Dropdown props',()=>{
        const wrapper = mount(<DropDownComponent id="departmentTest" onChangeEvent={(e)=>e} data={dataProps} />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('Dropdown').props().id).toBe("departmentTest");
        expect(wrapper.props().onChangeEvent('2')).toBe("2");
    })
    it('component data undefined',()=>{
        const wrapper = mount(<DropDownComponent data={dataProps} onChangeEvent={(e)=>e}/>);
        expect(wrapper.props().id).toBeUndefined();
    })
});

