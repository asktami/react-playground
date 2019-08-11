import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';

import renderer from 'react-test-renderer'; // add snapshot tests

describe('Messages test', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Messages />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	/*
	add a test case that will do two things:

	1.  Render the component and create a human readable JSON file
   	2. Compare the rendered component to a saved version of the component

	*/

	it('renders the UI as expected', () => {
		const tree = renderer
			.create(<Messages name="Messages" unread={4} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
