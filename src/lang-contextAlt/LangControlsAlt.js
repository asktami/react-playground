import React from './node_modules/react';
import LanguageContextAlt from './LanguageContextAlt';

console.log('-----------in LangControlsAlt-----------');
console.log(LanguageContextAlt);

const LangControlsAlt = (props) => {
	return (
		<LanguageContextAlt.Consumer>
			{/* {function renderProp() { */}
			{value => {
				console.log('context Consumer renderProp() value = ', value);
				// value is {lang: "en-US"}
				return (
					<>
						<button
							onClick={() => props.onSetLang('en-GB')}
							disabled={value.lang === 'en-GB'}
						>
							British{' '}
							<span role="img" aria-label="en-GB">
								🇬🇧
							</span>
						</button>{' '}
						<button
							onClick={() => props.onSetLang('en-US')}
							disabled={value.lang === 'en-US'}
						>
							American{' '}
							<span role="img" aria-label="en-US">
								🇺🇸
							</span>
						</button>{' '}
						<button
							onClick={() => props.onSetLang('ko')}
							disabled={value.lang === 'ko'}
						>
							Korean{' '}
							<span role="img" aria-label="ko">
								🇰🇷
							</span>
						</button>
					</>
				);
			}}
		</LanguageContextAlt.Consumer>
	);
}

export default  LangControlsAlt;