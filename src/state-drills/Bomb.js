/*
A component that uses life-cycles, setInterval and state to alternate between rendering either "tick" or "tock" until a time passes and then rendering "BOOM!!!!".

See BombAlt.js for better solution!
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

	// componentDidMount called by default after render()
	// if did NOT use componentDidMount would need to create and call some other function that had the interval in it
	componentDidMount() {
		console.log('called componentDidMount');
		this.interval = setInterval(() => {
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
		console.log('called componentWillUnmount');
		clearInterval(this.interval);
	}

	render() {
		console.log('called render');
		return (
			<div className="Bomb">
				<p>{this.state.display}</p>
			</div>
		);
	}
}
