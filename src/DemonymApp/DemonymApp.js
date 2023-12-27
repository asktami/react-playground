import React, { Component } from 'react';

// using trackPromise so can use LoadingIndicator
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../Loading/Loading';

import './DemonymApp.css';

import Demonym from './Demonym';
import CountrySelector from './CountrySelector';

// this url is no longer valid
// const fetchURL = 'https://country.register.gov.uk/records.json?page-size=5000';
const fetchURL = 'https://countriesnow.space/api/v0.1/countries';

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
				.then(responseData => {
				console.log('Success');
				console.log('responseData.data: ',responseData.data);
				console.log('Country: ',responseData.data[0].country);
				console.log('City: ',responseData.data[0].cities[0]);
							
				// const countries = responseData.data.map((item) => ({ ['name']: item.country , ['value']: item.country, ['country']: item.country}));
			
			
			const countries = responseData.data.map((item) => ({ ['name']: item.cities[0] , ['value']: item.cities[0], ['country']: item.country}));
				console.log('Country List: ', countries);
				
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
				name={this.state.selected['name']}
				country={this.state.selected.country}
			/>
		) : (
			<div className="demonym_app__placeholder">Select a country (CITY) above</div>
		);

		const error = this.state.error ? (
			<div className="demonym_app__error">{this.state.error}</div>
		) : null;

		const countrySelect = this.state.countries ? (
			<CountrySelector
				countries={this.state.countries}
				// can be hardcoded as:
				// countries={[{ name: 'Barbados' }, { name: 'Bahrain' }]}
				changeHandler={selected => this.setSelected(selected)}
			/>
		) : (
			<LoadingIndicator />
		);
		return (
			<div className="demonym_app">
				{error}
				{countrySelect}
				{demon}
			</div>
		);
	}
}

export default DemonymApp;