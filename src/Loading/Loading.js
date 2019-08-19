import React from 'react';

// https://lemoncode.github.io/react-promise-tracker/
// from https://www.basefactor.com/react-how-to-display-a-loading-indicator-on-fetch-calls

// from https://www.npmjs.com/package/react-loader-spinner
// loading spinner get via npm:
//  npm install react-loader-spinner --save

import Loader from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';

// loading spinner
const LoadingIndicator = props => {
	const { promiseInProgress } = usePromiseTracker();

	return (
		promiseInProgress && (
			<div
				style={{
					width: '100%',
					height: '100',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Loader type="ThreeDots" color={'#00FFFF'} height={100} width={100} />
			</div>
		)
	);
};

export default LoadingIndicator;
