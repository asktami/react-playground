// NOTE: this context is in it's own file so it can be directly imported into any other file

import React from 'react';

const LanguageContext = React.createContext({
	lang: window.navigator.language, // global variable &  default value
	setLang: () => {} // updater function to update this global variable's value, see AppLang.js
});

export default LanguageContext;
