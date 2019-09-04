// NOTE: this context is in it's own file so it can be directly imported into any other file

import React from './node_modules/react';

const LanguageContextAlt = React.createContext({
	lang: window.navigator.language
});

export default LanguageContextAlt;
