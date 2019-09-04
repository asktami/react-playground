import React, { useState } from 'react';
import ChildAlt from './ChildAlt';
import LangControlsAlt from './LangControlsAlt';
import LanguageContext from './LanguageContextAlt';

const AppLangAlt = props => {
	// if using function component:
	const [lang, setLang] = useState(window.navigator.language);

	const handleSetLang = lang => {
		setLang({ lang });
	};

	/*
	// if using class component:
	state = {
		lang: window.navigator.language
	};

	handleSetLang = lang => {
		this.setState({ lang });
	};
	*/

	const contextValue = { lang };

	/*
	render() {
		const contextValue = {
			lang: this.state.lang
		};
	*/

	return (
		<LanguageContext.Provider value={contextValue}>
			<hr />
			<div className="AppLang">
				<LangControlsAlt onSetLang={handleSetLang} />
				<ChildAlt />
			</div>
		</LanguageContext.Provider>
	);
};

export default AppLangAlt;
