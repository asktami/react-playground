import React, { Component } from 'react';
import languageSpecificCopy from './languageSpecificCopy';
import LanguageContext from './LanguageContext';

class GreatGrandChild extends Component {
	static contextType = LanguageContext;

	render() {
		// NOTE
		// const copy = languageSpecificCopy['en-US'] || {};
		// changed to
		// read context using static contextType:
		const copy = languageSpecificCopy[this.context.lang] || {};

		// NOTE: This doesn't work in every situation, it isn't supported on function components and doesn't work when you need to read multiple contexts.

		// NOTE: Another approach to reading context is by using a render prop, this works with function components.

		/*
		combine context with render props to read data out of the context. The method is to use a context consumer. Every context you create has a property called Consumer that we can use with JSX.
		*/

		return (
			<section>
				<h2>{copy.title}</h2>
				<p>{copy.body}</p>
				<button
					onClick={() => this.context.setLang('klingon')}
					disabled={this.context.lang === 'klingon'}
				>
					{'Klingon! <-- button set via context updater function!'}
					{/* yes I know it's a vulcan salut but star-wars */}{' '}
					<span role="img" aria-label="klingon">
						🖖
					</span>
				</button>
			</section>
		);
	}
}

export default GreatGrandChild;
