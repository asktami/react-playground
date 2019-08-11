import React from 'react';
import './Tooltip.css';

// using a function
/*
// in a function props are a parameter
// access props by using props
function Tooltip(props) {
	return (
		<span className='Tooltip'>
			<span
				className='Tooltip-content'
				style={{ color: props.color }}
			>
				{props.children}
			</span>
			<div className='Tooltip-message'>
				{props.message}
			</div>
		</span>
	)
}
export default Tooltip;
*/

// using a class
// access props by using this.props
class TooltipClass extends React.Component {
	static defaultProps = {
		color: '#01A800' // green
	};
	/*
	The defaultProp will be used if no equivalent prop is supplied. In this case, it will make the props.color have a default value of #01A800 when no other value is supplied.
	*/

	render() {
		// console.log('Using a class component!');
		// console.log('this.props = ' + this.props);
		return (
			<span className="Tooltip">
				<span className="Tooltip-content" style={{ color: this.props.color }}>
					{this.props.children}
				</span>
				<div className="Tooltip-message">{this.props.message}</div>
			</span>
		);
	}
}

export default TooltipClass;
