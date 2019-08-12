/*
A component that combines state and props. The parent of this component will pass in a prop that says which number chamber contains a bullet, the chamber should be between 1 and 8. When a user clicks on a button, the component will choose a random chamber and pull the trigger! If the chamber with the bullet in is chosen, the component will render BANG!!!!

spinning the chamber and pulling the trigger! ...

you're safe!

BANG!!!!

*/

import React from 'react';

export class RouletteGun extends React.Component {
	static defaultProps = {
		chamber: 0,
		spinningTheChamber: false,
		bulletInChamber: 8
	};

	state = {
		chamber: this.props.chamber,
		spinningTheChamber: this.props.spinningTheChamber,
		bulletInChamber: this.props.bulletInChamber
	};

	handleButtonClick = () => {};

	render() {
		return (
			<div>
				<p>RouletteGun</p>
				<button onClick={this.handleButtonClick()}>Pull the trigger</button>
			</div>
		);
	}
}
