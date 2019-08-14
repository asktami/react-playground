import React from 'react';
import './Accordian.css';

// display NO sections by default
// only show content when the sections array has length
// show the last section clicked
// only show 1 section at a time

export class Accordian extends React.Component {
	// define default sections empty array
	// any 'sections' props value is passed from App.js will be used instead
	static defaultProps = {
		sections: []
	};

	// default array index/section/button clicked/currentSectionIndex = 0
	state = {
		currentSectionIndex: null
	};

	toggleActive = index => e => {
		// remove active class from anything that has active class
		// then add active class to the selected button
		if (document.querySelector('.active') !== null) {
			document.querySelector('.active').classList.remove('active');
		}
		index.currentTarget.classList.add('active');
	};

	// property initializer syntax
	// it binds the event handler to the class AND lets you pass an argument (index) to the function/method on event (e) or ()
	handleButtonClick = index => event => {
		this.setState({ currentSectionIndex: index });

		// QUESTION - how to get toggleActive to work???
		// this.toggleActive(index);

		// remove active class from anything that has active class
		// then add active class to the selected button
		if (document.querySelector('.active') !== null) {
			document.querySelector('.active').classList.remove('active');
		}
		event.currentTarget.classList.add('active');
	};

	renderButtons() {
		// VERTICAL LIST OF BUTTONS
		const { sections } = this.props; // because only 1 props property
		const { currentSectionIndex } = this.state; // because only 1 state property

		const buttonList = sections.map((section, index) => (
			<li key={index}>
				<button className="accordion" onClick={this.handleButtonClick(index)}>
					{section.title}
				</button>

				{/*
				// render content only for clicked button
				// only clicked button section should open, close all others
				// not not this.props.section.length === if this.props.section.length > 0 */}
				{!!sections.length &&
					currentSectionIndex === index &&
					this.renderContent(sections, currentSectionIndex)}
			</li>
		));

		return <ul className="accordianList">{buttonList}</ul>;

		/*
		// HORIZONTAL LIST OF BUTTONS
		return sections.map((section, index) => (
			<button key={index} onClick={this.handleButtonClick(index)}>
				{tab.title}
			</button>
		));
		*/
	}

	renderContent(sections, currentSectionIndex) {
		// show section content for button clicked
		const currentSection = sections[currentSectionIndex];
		return (
			<div className="panel">
				<p>{currentSection.content}</p>
			</div>
		);
	}

	render() {
		return <div>{this.renderButtons()}</div>;
	}
}
