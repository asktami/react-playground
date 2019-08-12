/*
A component that uses life-cycles, setInterval and state to alternate between rendering either "tick" or "tock" until a time passes and then rendering "BOOM!!!!".
*/

import React from 'react';

export class Bomb extends React.Component {
	static defaultProps = {
		count: 0,
		display: 'tick'
	};

	state = {
		count: this.props.count,
		display: this.props.display
	};

	componentDidMount() {
		console.log('called componentDidMount');
		let interval = setInterval(() => {
			console.log('called setInterval');

			// update the DOM with the new state, every second
			this.setState({
				count: this.state.count + 1
			});

			// if count 8 or more, BOOM and stop interval
			if (this.state.count > 7) {
				this.setState({
					display: 'BOOM!!!!'
				});

				// and unmount (stop interval)
				this.componentWillUnmount();

				// if count NOT evenly divisible by 2, tock
			} else if (this.state.count % 2 === 0) {
				this.setState({
					display: 'tock'
				});

				// if count evenly divisible by 2, tick
			} else {
				this.setState({
					display: 'tick'
				});
			}
		}, 1000);
	}

	/* componentWillUnmount cleans up the interval when the component is removed from the DOM. We don't want any setInterval's hanging around when they shouldn't be!
	 */
	componentWillUnmount() {
		// QUESTION - why can't I use interval? why must I user this.interval?
		console.log('called componentWillUnmount');
		clearInterval(this.interval);
	}

	render() {
		console.log('called render');
		return (
			<div>
				<p>{this.state.display}</p>
			</div>
		);
	}
}
