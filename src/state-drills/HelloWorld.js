/*
A component that changes its display according to buttons that update state. Utilising event handlers and state.
*/

import React from 'react';

export class HelloWorld extends React.Component {
	static defaultProps = {
		who: 'world',
		friend: 'friend',
		react: 'React'
	};

	state = {
		who: this.props.who
	};

	// QUESTION: What is this syntax?
	// ANSWER: property initializer syntax
	// it binds the event handler to the class AND lets you pass an argument (newValue) to the function/method on event (e) or ()
	handleButtonClick = newValue => () => {
		this.setState({
			who: newValue
		});
	};

	render() {
		return (
			<div className="HelloWorld">
				<p>Hello, {this.state.who}!</p>
				<button onClick={this.handleButtonClick(this.props.who)}>
					Change to {this.props.who}
				</button>
				<br />
				<button onClick={this.handleButtonClick(this.props.friend)}>
					Change to {this.props.friend}
				</button>
				<br />
				<button onClick={this.handleButtonClick(this.props.react)}>
					Change to {this.props.react}
				</button>
			</div>
		);
	}
}
