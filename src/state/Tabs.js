import React from 'react';
import './Tabs.css';

export class Tabs extends React.Component {
	// define default tabs empty array
	// any 'tabs' props value is passed from App.js will be used instead
	static defaultProps = { tabs: [] };

	// default array index/tab/button clicked/currentTabIndex = 0
	state = {
		currentTabIndex: 0
	};

	// property initializer syntax
	// it binds the event handler to the class AND lets you pass an argument (index) to the function/method on event (e) or ()
	handleButtonClick = index => () => {
		console.log('button clicked!', { index });
		this.setState({ currentTabIndex: index });
	};

	renderButtons() {
		// HORIZONTAL LIST OF BUTTONS
		return this.props.tabs.map((tab, index) => (
			<button
				className="tabButtons"
				key={index}
				onClick={this.handleButtonClick(index)}
			>
				{tab.name}
			</button>
		));
	}

	renderContent() {
		// display first tab by default = const currentTab = this.props.tabs[0];
		// AND only show content when the tabs array has length

		// show tab content for button clicked
		const currentTab = this.props.tabs[this.state.currentTabIndex];
		return <div className="content">{currentTab.content}</div>;
	}

	render() {
		return (
			<div>
				{this.renderButtons()}
				{/* not not this.props.tabs.length === if this.props.tabs.length > 0 */}
				{!!this.props.tabs.length && this.renderContent()}
			</div>
		);
	}
}
