import React from './node_modules/react';
import GreatGrandChildAlt from './GreatGrandChildAlt';

const GrandChildAlt = (props) => {
	return (
		<div className="GrandChild">
			<GreatGrandChildAlt />
		</div>
	);
}

export default GrandChildAlt;