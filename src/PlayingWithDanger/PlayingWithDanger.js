// demo Error Boundaries

import React, { Component } from 'react';
import './PlayingWithDanger.css';

import Currency from './Currency';
import CurrencyError from './CurrencyError';

const PlayingWithDanger = props => {
	return (
		<div className="PlayingWithDanger">
			<h1>Error Boundary App</h1>
			<h2>Here are some currency values</h2>
			<CurrencyError>
				Germany: <Currency value={21} locale="de-DE" currency="USD" />
				<br />
			</CurrencyError>
			<CurrencyError>
				USA: <Currency value={21} locale="en-US" currency="USD" />
				<br />
			</CurrencyError>
			<CurrencyError>
				Invalid: <Currency value={21} locale="de-DE" currency="USD" />
			</CurrencyError>
			<h3>
				The currency values displayed are subject to change without notice.
			</h3>
		</div>
	);
};

export default PlayingWithDanger;
