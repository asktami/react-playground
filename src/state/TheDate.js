/*
Set an initial state in the constructor method and then read that state within the render. We accessed the datetime property on the state object and used a date method toLocaleString() to display the date in a human-readable text
*/

import React from 'react';
class TheDate extends React.Component {
	// use a new method in React classes, the constructor, to create the date-time when the TheDate component instances are created (instantiated)

	// constructor = before component is mounted
	constructor(props) {
		super(props);
		this.state = {
			datetime: new Date()
		};
		console.log('called constructor');
	}

	// -- To make the date-time update every second with the new time, like a clock we'll need to use some life-cycle methods: componentDidMount

	// componentDidMount is directly after the component is mounted, it also doesn't get re-triggered for all prop changes, only the first render, this is ideal!
	componentDidMount() {
		console.log('called componentDidMount');
		this.interval = setInterval(() => {
			console.log('called setInterval');
			// update the console evey second
			// console.log('tick');

			// update the DOM with the new state, every second
			this.setState({
				datetime: new Date()
			});
		}, 1000);
	}

	// componentWillUnmount cleans up the interval when the component is removed from the DOM. We don't want any setInterval's hanging around when they shouldn't be!
	componentWillUnmount() {
		console.log('called componentWillUnmount');
		clearInterval(this.interval);
	}

	render() {
		console.log('called render');
		console.log(this.state);
		return <div>Current DateTime: {this.state.datetime.toLocaleString()}</div>;
	}
}

export default TheDate;
