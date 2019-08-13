// Bomb Solution
// ******************************************

import React, { Component } from 'react';

export default class Bomb extends Component {
	state = {
		count: 0
	};

	/*
	componentDidMount() is called as soon as the component is mounted and ready

	- this is a good place to initiate API calls, if you need to load data from a remote endpoint

	- componentDidMount() allows the use of setState()

	- calling the setState() here will update state and cause another rendering but it will happen before the browser updates the UI. This is to ensure that the user will not see any UI updates with the double rendering.

	- You can set state here but with caution.
	*/
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				count: this.state.count + 1
			});
		}, 1000);
	}

	/*
	componentWillUnmount()

	As the name suggests this lifecycle method is called just before the component is unmounted and destroyed. If there are any cleanup actions that you would need to do, this would be the right spot.

	You cannot modify the component state in componentWillUnmount lifecycle.

	Common cleanup activities performed in this method include, clearing timers, cancelling api calls, or clearing any caches in storage.
	*/
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	renderDisplay() {
		const { count } = this.state;
		if (count >= 8) {
			clearInterval(this.interval);
			return 'BOOM!!!!';
		} else if (count % 2 === 0) {
			return 'tick';
		} else {
			return 'tock';
		}
	}

	// render() = mount component
	// you can not setState() within a render()
	// because a render() method has to be pure with no side-effects (will always return the same output when the same inputs are passed)
	render() {
		return <div className="CountdownBomb">{this.renderDisplay()}</div>;
	}
}
