import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'; // add snapshot tests

import Messages from './Messages';

describe('Messages component', () => {
	// all my Messages component test cases here

	// smoke test:
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Messages />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	// snapshot testing:
	/*
	add a test case to:
	1.  Render the component and create a human readable JSON file
   	2. Compare the rendered component to a saved version of the component
	*/

	it('renders the UI as expected with unreads > 0', () => {
		const tree = renderer
			.create(<Messages name="messages" unread={4} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	// add a test to perform a snapshot test on the Messages component with the unread prop set to 0
	it('renders the UI as expected with unreads = 0', () => {
		const tree = renderer
			.create(<Messages name="Messages" unread={0} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
