// Error Boundary

import React, { Component } from 'react';
import './PlayingWithDanger.css';

import Currency from './Currency';
import CurrencyError from './CurrencyError';

class PlayingWithDanger extends Component {
	render() {
		return (
			<div className="PlayingWithDanger">
				<CurrencyError>
					Error Boundary App <br />
					<br />
					Germany: <Currency value={21} locale="de-DE" currency="USD" />
					<br />
					USA: <Currency value={21} locale="en-US" currency="USD" />
					<br />
					Invalid: <Currency value={21} locale="de-DE" currency="US" />
				</CurrencyError>
			</div>
		);
	}
}

export default PlayingWithDanger;
