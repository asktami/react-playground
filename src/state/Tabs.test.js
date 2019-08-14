// using Jest and  Enzyme for testing, not Jest (react-test-renderer)

import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme'; // add enzyme for event listener tests
import toJson from 'enzyme-to-json'; // to create a JSON version of the Jest wrapper

import { Tabs } from './Tabs';

describe(`Tabs Component`, () => {
	// arrayOfObjects for Tabs component
	const tabsProp = [
		{
			name: 'First tab',
			content:
				'First tab: Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
		},
		{
			name: 'Second tab',
			content:
				'Second tab: Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		},
		{
			name: 'Third tab',
			content:
				'Third tab: Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
		}
	];

	// smoke test
	it('renders without errors', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Tabs />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	// snapshot tests
	// enzyme EVENT LISTENER test
	// using wrapper to  create a snapshot of the component instance from the JSON

	it('renders empty given no tabs', () => {
		const wrapper = shallow(<Tabs />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('renders the first tab by default', () => {
		const wrapper = shallow(<Tabs tabs={tabsProp} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	// test for clicking on one of the buttons
	// .at(1) = button at array index position 1 (i.e. 2nd button)
	it('closes the first tab and opens any clicked tab', () => {
		const wrapper = shallow(<Tabs tabs={tabsProp} />);
		wrapper
			.find('button')
			.at(1)
			.simulate('click');
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
