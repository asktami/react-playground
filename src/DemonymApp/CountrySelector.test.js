// using Jest and  Enzyme for testing, not Jest (react-test-renderer)

import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme'; // add enzyme for event listener tests
import toJson from 'enzyme-to-json'; // to create a JSON version of the Jest wrapper

import CountrySelector from './CountrySelector';

describe(`CountrySelector Component`, () => {
	// smoke test
	it('renders without errors', () => {
		const div = document.createElement('div');
		ReactDOM.render(<CountrySelector />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
