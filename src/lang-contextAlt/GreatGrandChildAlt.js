import React, { Component } from './node_modules/react';
import languageSpecificCopyAlt from './languageSpecificCopyAlt';
import LanguageContextAlt from './LanguageContextAlt';

const GreatGrandChildAlt = props => {
	const contextType = LanguageContextAlt;

	// NOTE
	// const copy = languageSpecificCopy['en-US'] || {};
	// changed to
	// read context using static contextType:
	const copy = languageSpecificCopyAlt[props.context.lang] || {};

	// NOTE: This doesn't work in every situation, it isn't supported on function components and doesn't work when you need to read multiple contexts.

	// NOTE: Another approach to reading context is by using a render prop, this works with function components.

	/*
		combine context with render props to read data out of the context. The method is to use a context consumer. Every context you create has a property called Consumer that we can use with JSX.
		*/

	return (
		<section>
			<h2>{copy.title}</h2>
			<p>{copy.body}</p>
		</section>
	);
};

export default GreatGrandChildAlt;
