// using only Enzyme for testing, not Jest (react-test-renderer)

import React from 'react';

import { shallow } from 'enzyme'; // add enzyme for event listener tests
import toJson from 'enzyme-to-json'; // to create a JSON version of the Jest wrapper

import { Accordian } from './Accordian';

// Accordian component sections prop
const sectionsProp = [
	{
		title: 'Section 1',
		content:
			'Section 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.'
	},
	{
		title: 'Section 2',
		content:
			'Section 2: Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!'
	},
	{
		title: 'Section 3',
		content:
			'Section 3: Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?'
	}
];

describe(`Accordian Component`, () => {
	// smoke test
	// renders empty given no Accordion without errors
	it('renders an empty li when the sections prop is not supplied', () => {
		const wrapper = shallow(<Accordian />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('renders no sections by default', () => {
		const wrapper = shallow(<Accordian sections={sectionsProp} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	// test for clicking on one of the buttons
	// .at(1) = button at array index position 1 (i.e. 2nd button)
	it('opens one section at a time, the clicked section, open section 2', () => {
		const wrapper = shallow(<Accordian sections={sectionsProp} />);
		wrapper
			.find('button')
			.at(2)
			.simulate('click');
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	// test for clicking on one of the buttons
	// only open the last section clicked
	it('only open the last section clicked, open section 3', () => {
		const wrapper = shallow(<Accordian sections={sectionsProp} />);
		wrapper
			.find('button')
			.at(1)
			.simulate('click');
		wrapper
			.find('button')
			.at(2)
			.simulate('click');
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
