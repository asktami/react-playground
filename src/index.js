import React from 'react'; // import React var from node_module
import ReactDOM from 'react-dom'; // import ReactDOM var from node_module
import './index.css'; // relative import of CSS file, enabled by webpack

import App from './App'; // relative import of variable named App

import AppLang from './lang-context/AppLang'; // using context & class components
// import AppLangAlt from './lang-contextAlt/AppLangAlt'; // using context & function components

import RegistrationForm from './registrationForm/registrationForm'; // form with controlled components - uses state

import PlayingWithDanger from './PlayingWithDanger/PlayingWithDanger'; // error boundary

ReactDOM.render(
	<>
		<App />
		<AppLang />
		<RegistrationForm />
		<PlayingWithDanger />
	</>,
	document.getElementById('root')
);

/*
When we ran the command npm install, npm took the following steps:

    Read the package.json file.
    Read the section labeled dependencies inside the JSON file.
    Saw many dependencies, including react listed as a dependency.
    Downloaded React (as well as the other dependencies) and saved it into your project within a directory named node_modules.


Looking at the first code example, the top has the following line:

	import React from 'react';


Once npm has completed the install, it's available for us to import into our code. This is what the import code does. It's creating a variable named React from a location within the node_modules of 'react'.

After adding the above line, we can use React within this file.


NOTES:
-- Relative imports require us as developers to specify both the import and the export.

*/
