/*
A component that combines state and props. The parent of this component will pass in a prop that says which number chamber contains a bullet, the chamber should be between 1 and 8. When a user clicks on a button, the component will choose a random chamber and pull the trigger! If the chamber with the bullet in is chosen, the component will render BANG!!!!
*/

import React from 'react';

export class RouletteGun extends React.Component {
	static defaultProps = {
		bulletInChamber: 8
	};

	state = {
		chamber: null,
		spinningTheChamber: false
	};

	/* componentWillUnmount cleans up the timeout when the component is removed from the DOM. We don't want any setTimeout's hanging around when they shouldn't be!
	 */
	// If the component is to be unmounted, clear the timeout
	componentWillUnmount() {
		console.log('called componentWillUnmount');
		clearTimeout(this.timeout);
	}

	// When the user clicks the button, there should be a click event handler.
	handleButtonClick = () => {
		// The state should update spinningTheChamber to be true.
		this.setState({
			spinningTheChamber: true
		});

		// register timeout for 2 seconds
		// update the DOM with the new state, every 2 seconds
		this.timeout = setTimeout(() => {
			console.log('called setTimeout');

			// within the timeout generate a random number between 1 and 8
			// within the timeout update state so that the random number is the new value for chamber and spinningTheChamber = false

			this.setState({
				chamber: Math.ceil(Math.random() * 8),
				spinningTheChamber: false
			});
		}, 2000);
	};

	// The component should render the content of the p element
	renderDisplay = () => {
		/*
		//using spread operators to create variables:

		const { chamber, spinningTheChamber } = this.state
		const { bulletInChamber } = this.props

		if (spinningTheChamber) {
      		return 'spinning the chamber and pulling the trigger! ...'
    	} else if (chamber === bulletInChamber) {
      		return 'BANG!!!!!'
    	} else {
    		  return 'you\'re safe!'
		}
		*/

		if (this.state.spinningTheChamber) {
			return 'spinning the chamber and pulling the trigger!...';
		} else if (this.state.chamber === this.props.bulletInChamber) {
			return 'BANG!!!!';
		} else {
			return "you're safe!";
		}
	};

	// QUESTION why does () after this.handleButtonClick cause this error?
	/*
	Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.


	Same thing happens if do:

	state = {
		chamber: null,
		spinningTheChamber: false,
		display: null
	};


		if (this.state.spinningTheChamber) {
			this.setState({
				display: 'spinning the chamber and pulling the trigger!...'
			});
		} else if (this.state.chamber === this.state.bulletInChamber) {
			this.setState({
				display: 'BANG!!!!'
			});
		} else {
			this.setState({
				display: "you're safe!"
			});
		}


		<p>{this.state.display}<p>
	*/

	render() {
		return (
			<div className="RouletteGun">
				<p>
					{this.renderDisplay()}
					<br />
					chamber is {this.state.chamber}
					<br />
					bullet in chamber is {this.props.bulletInChamber}
				</p>
				<button onClick={this.handleButtonClick}>Pull the trigger!</button>
			</div>
		);
	}
}
