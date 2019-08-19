import React, { Component } from 'react';

import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../Loading/Loading';

import './DemonymApp.css';

import Demonym from './Demonym';
import CountrySelector from './CountrySelector';

const fetchURL = 'https://country.register.gov.uk/records.json?page-size=5000';

class DemonymApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			selected: null
		};
	}

	// a promise has 3 states: pending, resolved, rejected
	fetchCountries = () => {
		trackPromise(
			fetch(fetchURL)
				.then(response => {
					//check if response is ok
					console.log('About to check for errors');
					if (!response.ok) {
						console.log('An error did occur, lets throw an error.');
						throw new Error('Something went wrong'); //throw an error
					}
					return response; //ok, so just continue
				})
				.then(response => response.json())
				.then(data => {
					const countries = Object.keys(data).map(key => data[key].item[0]);
					this.setState({
						countries,
						error: null
					});
				})
				.catch(err => {
					//this catch handles the error condition
					console.log('Handling the error here.', err);

					this.setState({
						error: err.message
					});
				})
		);
	};

	componentDidMount() {
		this.fetchCountries();
	}

	setSelected(selected) {
		this.setState({
			selected
		});
	}

	render() {
		const demon = this.state.selected ? (
			<Demonym
				name={this.state.selected['citizen-names']}
				country={this.state.selected.name}
			/>
		) : (
			<div className="demonym_app__placeholder">Select a country above</div>
		);

		const error = this.state.error ? (
			<div className="demonym_app__error">{this.state.error}</div>
		) : (
			<>
				<LoadingIndicator />
			</>
		);

		return (
			<div className="demonym_app">
				{error}
				<CountrySelector
					countries={this.state.countries}
					// hardcoded
					// countries={[{ name: 'Barbados' }, { name: 'Bahrain' }]}

					changeHandler={selected => this.setSelected(selected)}
				/>
				{demon}
			</div>
		);
	}
}

export default DemonymApp;
