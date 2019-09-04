import React from './node_modules/react';
import GrandChildAlt from './GrandChildAlt';

const Child = (props) => {
	return (
		<main role="main" className="Child">
			<GrandChildAlt />
		</main>
	);
}
export default Child;