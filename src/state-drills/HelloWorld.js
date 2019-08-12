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

	// to bind the handleButtonClick method in the class constructor:
	// QUESTION - What is this syntax???
	handleButtonClick = key => e => {
		this.setState({
			who: key
		});
	};

	render() {
		return (
			<div>
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
