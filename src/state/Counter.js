/*
make a component called Counter that displays a count, when you click a button it adds 1 to the count.

- count state initialized to 0 and a button that isn't functional
*/

import React from 'react';

export class Counter extends React.Component {
	/*
	ALTERNATIVE - to bind the handleButtonClick method in the class constructor:

	// Set default props
	static defaultProps = {
		count: 0,
		step: 2
	};

	constructor(props, defaultProps) {
		console.log('props in constructor', props);
		super(props, defaultProps);
		this.state = {
			count: this.props.count,
			step: this.props.step
		};
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick() {
		console.log('props in handleButtonClick', this.props);
		console.log('state in handleButtonClick', this.state);

		this.setState({
			count: this.state.count + this.state.step
		});

		console.log(
			'this.state.count shows value before updated = ',
			this.state.count
		);
	}
*/

	// **************************************************************
	// Set default props
	// default values for count and step if not passed in App.js
	static defaultProps = {
		count: 0,
		step: 2
	};

	// NOTE: new way to initialize state without constructor!
	state = {
		count: this.props.count,
		step: this.props.step
	};

	// to bind the handleButtonClick method in the class constructor:
	handleButtonClick = () => {
		console.log('props in handleButtonClick', this.props);
		console.log('state in handleButtonClick', this.state);

		this.setState({
			count: this.state.count + this.state.step
		});
		console.log(
			'this.state.count shows value before updated = ',
			this.state.count
		);
	};

	render() {
		return (
			<div>
				<p>The current count: {this.state.count}</p>
				<button onClick={this.handleButtonClick}>Add {this.state.step}</button>
			</div>
		);
	}
}
